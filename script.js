// Konfiguráció: PDF.js worker beállítása
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// Referenciák az alap funkciókhoz
const fileInput = document.getElementById('pdfInput');
const status = document.getElementById('status');
const convertBtn = document.getElementById('convertBtn');
const pdfToJpgBtn = document.getElementById('pdfToJpg');
const jpgToPdfBtn = document.getElementById('jpgToPdf');
const imgToWebpBtn = document.getElementById('imgToWebp');

// Referenciák a QR generátorhoz és a szekciókhoz
const qrModeBtn = document.getElementById('qrModeBtn');
const fileSection = document.getElementById('fileSection');
const qrSection = document.getElementById('qrSection');
const qrInputData = document.getElementById('qrInputData');
const generateQrBtn = document.getElementById('generateQrBtn');
const qrResult = document.getElementById('qrResult');
const qrCodeImage = document.getElementById('qrCodeImage');
const downloadQrBtn = document.getElementById('downloadQrBtn');

let currentMode = 'pdfToJpg';
let currentQRCode = null;

/// Új referenciák a Drag & Drop-hoz
const dropZone = document.getElementById('dropZone');
const fileInfo = document.getElementById('fileInfo');
// A fileInput referenciád már megvan a kódodban!

// 1. Kattintás a zónára (megnyitja a rejtett fájltallózót)
dropZone.addEventListener('click', () => {
    fileInput.click();
});

// 2. Drag & Drop vizuális effektek
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Fontos: Megakadályozza, hogy a böngésző megnyissa a fájlt!
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');

    // Ha dobtak be fájlt, azt átadjuk a rejtett inputnak
    if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        updateFileInfo();
    }
});

// 3. Fájl kiválasztásának visszajelzése (akár kattintással, akár bedobással)
fileInput.addEventListener('change', updateFileInfo);

function updateFileInfo() {
    if (fileInput.files.length > 0) {
        fileInfo.innerText = "Kiválasztott fájl: " + fileInput.files[0].name;
        fileInfo.style.color = "#27ae60"; // Zöld szín a sikerért
        status.innerText = ""; // Töröljük a korábbi státuszt
    }
}

// Üzemmód váltó logikája
function setMode(mode) {
    currentMode = mode;
    
    // Aktív osztály eltávolítása minden gombról
    pdfToJpgBtn.classList.remove('active');
    jpgToPdfBtn.classList.remove('active');
    imgToWebpBtn.classList.remove('active');
    qrModeBtn.classList.remove('active');

    // Alapértelmezett nézetek beállítása (Fájl szekció látható, QR rejtve)
    fileSection.style.display = 'block';
    qrSection.style.display = 'none';
    fileInput.value = "";
    status.style.color = "#2d3436";

    if (mode === 'pdfToJpg') {
        pdfToJpgBtn.classList.add('active');
        fileInput.accept = "application/pdf";
        convertBtn.innerText = "PDF konvertálása JPG-be";
        status.innerText = "Mód: PDF -> JPG";
    } else if (mode === 'jpgToPdf') {
        jpgToPdfBtn.classList.add('active');
        fileInput.accept = "image/jpeg, image/png";
        convertBtn.innerText = "Képek konvertálása PDF-be";
        status.innerText = "Mód: JPG -> PDF";
    } else if (mode === 'imgToWebp') {
        imgToWebpBtn.classList.add('active');
        fileInput.accept = "image/jpeg, image/png";
        convertBtn.innerText = "Kép konvertálása WebP-be";
        status.innerText = "Mód: IMG -> WebP";
    } else if (mode === 'qrCode') {
        // QR generátor nézet bekapcsolása
        qrModeBtn.classList.add('active');
        fileSection.style.display = 'none';
        qrSection.style.display = 'block';
        status.innerText = "Mód: QR Kód Generálása";
    }
}

// Eseménykezelők a módok közötti váltáshoz (EZ HIÁNYZOTT!)
pdfToJpgBtn.addEventListener('click', () => setMode('pdfToJpg'));
jpgToPdfBtn.addEventListener('click', () => setMode('jpgToPdf'));
imgToWebpBtn.addEventListener('click', () => setMode('imgToWebp'));
qrModeBtn.addEventListener('click', () => setMode('qrCode'));

// Kezdő üzemmód beállítása betöltéskor
setMode('pdfToJpg');

// Konvertálás indítása (Fájlok esetén)
convertBtn.addEventListener('click', async () => {
    if (fileInput.files.length === 0) {
        alert("Kérlek válassz ki egy fájlt!");
        return;
    }

    convertBtn.disabled = true;
    convertBtn.innerText = "Konvertálás folyamatban...";
    
    try {
        if (currentMode === 'pdfToJpg') {
            await handlePdfToJpg(fileInput.files[0]);
        } else if (currentMode === 'jpgToPdf') {
            await handleJpgToPdf(fileInput.files[0]);
        } else if (currentMode === 'imgToWebp') {
            await handleImgToWebp(fileInput.files[0]);
        }
    } catch (e) {
        status.innerText = "Hiba történt: " + e.message;
        status.style.color = "red";
        convertBtn.disabled = false;
        convertBtn.innerText = "Újrapróbálkozás";
    }
});

// Segédfüggvény a nézet váltására a konverzió után
function showResult() {
    document.querySelector('.converter-container').style.display = 'none';
    const resultPage = document.createElement('div');
    resultPage.className = 'converter-container';
    resultPage.style.textAlign = 'center';
    resultPage.innerHTML = `
        <h1 style="color: #27ae60; margin-bottom: 10px;">Sikeres művelet!</h1>
        <p style="margin-bottom: 25px; color: #636e72;">A fájl letöltése sikeresen megkezdődött.</p>
        <button onclick="location.reload()" id="newConvertBtn" style="background-color: #2d3436; color: white; padding: 14px; border: none; border-radius: 8px; font-weight: 600; width: 100%; cursor: pointer; transition: background 0.3s;">
            Új művelet indítása
        </button>
    `;
    document.body.appendChild(resultPage);

    const newBtn = document.getElementById('newConvertBtn');
    newBtn.addEventListener('mouseover', () => newBtn.style.backgroundColor = '#000');
    newBtn.addEventListener('mouseout', () => newBtn.style.backgroundColor = '#2d3436');
}

// PDF -> JPG logika
async function handlePdfToJpg(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport: viewport }).promise;

    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement('a');
    link.href = image;
    link.download = "konvertalt_oldal.jpg";
    link.click();
    
    showResult();
}

// JPG -> PDF logika
async function handleJpgToPdf(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                try {
                    const { jsPDF } = window.jspdf;
                    const orientation = img.width > img.height ? 'l' : 'p';
                    const pdf = new jsPDF({
                        orientation: orientation,
                        unit: 'px',
                        format: [img.width, img.height]
                    });

                    pdf.addImage(e.target.result, 'JPEG', 0, 0, img.width, img.height);
                    pdf.save("konvertalt_dokumentum.pdf");
                    
                    showResult();
                    resolve();
                } catch (err) {
                    reject(err);
                }
            };
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// IMG -> WebP logika
async function handleImgToWebp(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    ctx.drawImage(img, 0, 0);
                    const webpDataUrl = canvas.toDataURL('image/webp', 0.8);
                    
                    const link = document.createElement('a');
                    link.href = webpDataUrl;
                    
                    const baseName = file.name.split('.').slice(0, -1).join('.');
                    link.download = `${baseName}.webp`;
                    link.click();
                    
                    showResult();
                    resolve();
                } catch (err) {
                    reject(err);
                }
            };
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ==========================================
// QR KÓD GENERÁTOR LOGIKA
// ==========================================

generateQrBtn.addEventListener('click', () => {
    const data = qrInputData.value.trim();
    
    if (!data) {
        alert("Kérlek, írd be a szöveget vagy a linket!");
        return;
    }

    qrCodeImage.innerHTML = '';
    
    currentQRCode = new QRCode(qrCodeImage, {
        text: data,
        width: 200, 
        height: 200,
        colorDark : "#000000", 
        colorLight : "#ffffff", 
        correctLevel : QRCode.CorrectLevel.H
    });

    status.innerText = "Sikeresen generálva!";
    status.style.color = "#27ae60";
    qrResult.style.display = 'block';
});

downloadQrBtn.addEventListener('click', () => {
    const img = qrCodeImage.querySelector('img');
    const canvas = qrCodeImage.querySelector('canvas');
    
    let imageUrl = '';
    
    if (img && img.src) {
        imageUrl = img.src;
    } else if (canvas) {
        imageUrl = canvas.toDataURL("image/png");
    }

    if (imageUrl) {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = "qr_kod.png"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        status.innerText = "Sikeresen elmentve!";
        showResult(); 
    } else {
        alert("Hiba: Nem található a mentendő kép.");
    }
});

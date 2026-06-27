// Konfiguráció: PDF.js worker beállítása
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// Referenciák
const fileInput = document.getElementById('pdfInput');
const status = document.getElementById('status');
const convertBtn = document.getElementById('convertBtn');
const pdfToJpgBtn = document.getElementById('pdfToJpg');
const jpgToPdfBtn = document.getElementById('jpgToPdf');
const imgToWebpBtn = document.getElementById('imgToWebp');
let currentMode = 'pdfToJpg';

// Fájl kiválasztásának visszajelzése
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        status.innerText = "Kiválasztott fájl: " + fileInput.files[0].name;
        status.style.color = "#3498db";
    }
});

// Konvertálás indítása
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
        } else {
            await handleImgToWebp(fileInput.files[0]); // Новий виклик
        }
    } catch (e) {
        status.innerText = "Hiba történt: " + e.message;
        status.style.color = "red";
        convertBtn.disabled = false;
        convertBtn.innerText = currentMode === 'pdfToJpg' ? "PDF konvertálása JPG-be" : "Képek konvertálása PDF-be";
    }
});

// Segédfüggvény a nézet váltására a konverzió után (Kép nélkül, letisztult dizájnnal)
function showResult() {
    document.querySelector('.converter-container').style.display = 'none';
    const resultPage = document.createElement('div');
    resultPage.className = 'converter-container';
    resultPage.style.textAlign = 'center';
    resultPage.innerHTML = `
        <h1 style="color: #27ae60; margin-bottom: 10px;">Sikeres konverzió!</h1>
        <p style="margin-bottom: 25px; color: #636e72;">A fájl letöltése sikeresen megkezdődött.</p>
        <button onclick="location.reload()" id="newConvertBtn" style="background-color: #2d3436; color: white; padding: 14px; border: none; border-radius: 8px; font-weight: 600; width: 100%; cursor: pointer; transition: background 0.3s;">
            Új konvertálás
        </button>
    `;
    document.body.appendChild(resultPage);

    // Hover effektus az új gombhoz
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
    
    // Nézet váltás
    showResult();
}

// JPG -> PDF logika - Kép méretével megegyező PDF
async function handleJpgToPdf(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                try {
                    const { jsPDF } = window.jspdf;
                    
                    // Tájolás meghatározása (álló vagy fekvő)
                    const orientation = img.width > img.height ? 'l' : 'p';
                    
                    // PDF létrehozása a kép pontos pixelméreteivel
                    const pdf = new jsPDF({
                        orientation: orientation,
                        unit: 'px',
                        format: [img.width, img.height]
                    });

                    // Kép beillesztése a bal felső sarokból, teljes méretben
                    pdf.addImage(e.target.result, 'JPEG', 0, 0, img.width, img.height);
                    pdf.save("konvertalt_dokumentum.pdf");
                    
                    // Nézet váltás
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

// Üzemmód váltó logikája
function setMode(mode) {
    currentMode = mode;
    
    // Скидаємо активний клас з усіх кнопок
    pdfToJpgBtn.classList.remove('active');
    jpgToPdfBtn.classList.remove('active');
    imgToWebpBtn.classList.remove('active');

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
    } else {
        // Налаштування для WebP
        imgToWebpBtn.classList.add('active');
        fileInput.accept = "image/jpeg, image/png";
        convertBtn.innerText = "Kép konvertálása WebP-be";
        status.innerText = "Mód: IMG -> WebP";
    }
    fileInput.value = "";
    status.style.color = "#2d3436";
}

// Додаємо слухача для нової кнопки:
imgToWebpBtn.addEventListener('click', () => setMode('imgToWebp'));

pdfToJpgBtn.addEventListener('click', () => setMode('pdfToJpg'));
jpgToPdfBtn.addEventListener('click', () => setMode('jpgToPdf'));

setMode('pdfToJpg');

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
                    
                    // Конвертація з якістю 80%
                    const webpDataUrl = canvas.toDataURL('image/webp', 0.8);
                    
                    const link = document.createElement('a');
                    link.href = webpDataUrl;
                    
                    // Зберігаємо оригінальну назву
                    const baseName = file.name.split('.').slice(0, -1).join('.');
                    link.download = `${baseName}.webp`;
                    link.click();
                    
                    // Викликаємо стандартний екран успіху Somex
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

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const fileInput = document.getElementById('pdfInput');
const status = document.getElementById('status');
const convertBtn = document.getElementById('convertBtn');
const pdfToJpgBtn = document.getElementById('pdfToJpg');
const jpgToPdfBtn = document.getElementById('jpgToPdf');
let currentMode = 'pdfToJpg';

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        status.innerText = "Kiválasztott fájl: " + fileInput.files[0].name;
        status.style.color = "#3498db";
    }
});

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
        } else {
            await handleJpgToPdf(fileInput.files[0]);
        }
    } catch (e) {
        status.innerText = "Hiba történt: " + e.message;
        status.style.color = "red";
    } finally {
        convertBtn.disabled = false;
        convertBtn.innerText = currentMode === 'pdfToJpg' ? "PDF konvertálása JPG-be" : "Képek konvertálása PDF-be";
    }
});

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
    status.innerText = "Sikeres PDF -> JPG konverzió!";
    status.style.color = "#27ae60";
}

async function handleJpgToPdf(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                // A javított inicializálás
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF();
                pdf.addImage(e.target.result, 'JPEG', 10, 10, 180, 160);
                pdf.save("konvertalt_dokumentum.pdf");
                status.innerText = "Sikeres JPG -> PDF konverzió!";
                status.style.color = "#27ae60";
                resolve();
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function setMode(mode) {
    currentMode = mode;
    if (mode === 'pdfToJpg') {
        pdfToJpgBtn.classList.add('active');
        jpgToPdfBtn.classList.remove('active');
        fileInput.accept = "application/pdf";
        convertBtn.innerText = "PDF konvertálása JPG-be";
        status.innerText = "Mód: PDF -> JPG";
    } else {
        jpgToPdfBtn.classList.add('active');
        pdfToJpgBtn.classList.remove('active');
        fileInput.accept = "image/jpeg, image/png";
        convertBtn.innerText = "Képek konvertálása PDF-be";
        status.innerText = "Mód: JPG -> PDF";
    }
    fileInput.value = "";
    status.style.color = "#2d3436";
}

pdfToJpgBtn.addEventListener('click', () => setMode('pdfToJpg'));
jpgToPdfBtn.addEventListener('click', () => setMode('jpgToPdf'));

setMode('pdfToJpg');
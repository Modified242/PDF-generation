pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const translations = {
    en: { settings: 'Settings', home_title: 'All PDF and Image Tools', home_desc: 'Select the tool you want to use for quick conversion and editing.', back_to_tools: 'Back to tools', drop_title: 'Drop files here', drop_or: 'or <span class=\'browse-link\'>click to browse</span>', clear_all: 'Clear All', qr_content: 'Content', qr_fg: 'Foreground Color', qr_bg: 'Background Color', qr_size: 'Size (px)', qr_err: 'Error Correction', generate_qr: 'Generate QR Code', qr_copy: 'Copy', qr_dl: 'Download PNG', qr_placeholder: 'QR code will appear here', settings_title: 'Settings', set_jpg_q: 'JPG Quality', set_pdf_dpi: 'PDF Resolution (DPI)', set_webp_q: 'WebP Quality', set_auto_dl: 'Auto Download', preview_title: 'Preview', processing: 'Processing...', files_selected: 'files selected', tool_merge_t: 'Merge PDF', tool_merge_d: 'Combine multiple PDF files into one document.', tool_split_t: 'Split PDF', tool_split_d: 'Separate a PDF into individual pages.', tool_p2j_t: 'PDF to JPG', tool_p2j_d: 'Convert every PDF page into a JPG image.', tool_j2p_t: 'JPG to PDF', tool_j2p_d: 'Combine images into a single PDF.', tool_i2w_t: 'Image to WebP', tool_i2w_d: 'Convert images to WebP format.', tool_qr_t: 'QR Code Studio', tool_qr_d: 'Generate customized QR codes.', tool_rotate_t: 'Rotate PDF', tool_rotate_d: 'Rotate all pages 90 degrees clockwise.', tool_watermark_t: 'Add Watermark', tool_watermark_d: 'Place a text watermark on every page.', tool_protect_t: 'Protect PDF', tool_protect_d: 'Protect your PDF with a password.', tool_unlock_t: 'Unlock PDF', tool_unlock_d: 'Unlock password-protected PDF files.', tool_pagenum_t: 'Page Numbers', tool_pagenum_d: 'Add page numbers to the document.', toast_welcome: 'Welcome to ProConvert!', toast_no_files: 'Please select at least one file!', toast_error: 'Error: ', toast_success: 'Operation completed successfully!', prompt_watermark: 'Enter watermark text (e.g., DRAFT):', prompt_protect: 'Enter password to encrypt PDF:', prompt_unlock: 'Enter current password to unlock PDF:', wm_title: 'Watermark Settings', wm_tab_text: 'Enter Text', wm_tab_image: 'Upload Image (PNG/JPG)', wm_text: 'Watermark Text', wm_color: 'Color', wm_image: 'Custom Image File (Logo)', wm_pos_x: 'Position X (%)', wm_pos_y: 'Position Y (%)', wm_size: 'Size / Scale', wm_rot: 'Rotation (degrees)', wm_opac: 'Opacity (%)', wm_preview_btn: 'Generate Live Preview', wm_draft: 'DRAFT', toast_wm_img_req: 'Please select a watermark image (PNG/JPG)!', file_unknown: 'unknown', file_suffix_wm: '_watermarked', toast_preview_req: 'Please upload a PDF first for preview!', toast_preview_err: 'Error loading preview.', preview_btn_loading: 'Loading...', preview_btn_update: 'Update Preview', meta_desc_default: 'Free, browser-based PDF and image converter. Merge, split, rotate, watermark, encrypt PDF and generate QR codes without server upload.', meta_title_default: 'ProConvert - Free PDF and Image Tools', toast_zip_creating: 'Creating ZIP archive...', qr_tab_text: 'Text / URL', qr_tab_phone: 'Phone Call', qr_phone_label: 'Phone Number', toast_qr_phone_invalid: 'Please enter a valid phone number (7-15 digits)!', qr_tab_card: 'Bank Card', qr_card_label: 'Bank Card Number', qr_card_hint: 'Scan with camera and click "Copy" to save card number', toast_qr_card_invalid: 'Card number must contain between 13 and 19 digits!', toast_qr_card_luhn_warning: 'Warning: Check card number digits (Luhn checksum failed).' },
    hu: { settings: 'Beállítások', home_title: 'Minden PDF és Kép Eszköz', home_desc: 'Válaszd ki a használni kívánt funkciót a gyors konvertáláshoz.', back_to_tools: 'Vissza az eszközökhöz', drop_title: 'Húzd ide a fájlokat', drop_or: 'vagy <span class=\'browse-link\'>kattints a tallózáshoz</span>', clear_all: 'Összes törlése', qr_content: 'Tartalom', qr_fg: 'Szín (előtér)', qr_bg: 'Háttérszín', qr_size: 'Méret (px)', qr_err: 'Hibajavítás', generate_qr: 'QR kód generálása', qr_copy: 'Másolás', qr_dl: 'Letöltés PNG', qr_placeholder: 'A QR kód itt fog megjelenni', settings_title: 'Beállítások', set_jpg_q: 'JPG minőség', set_pdf_dpi: 'PDF felbontás (DPI)', set_webp_q: 'WebP minőség', set_auto_dl: 'Automatikus letöltés', preview_title: 'Előnézet', processing: 'Feldolgozás...', files_selected: 'fájl kiválasztva', tool_merge_t: 'PDF Egyesítése', tool_merge_d: 'Több PDF fájl egyesítése egyetlen dokumentummá.', tool_split_t: 'PDF Darabolása', tool_split_d: 'Válaszd szét a PDF-et külön oldalakra.', tool_p2j_t: 'PDF-ből JPG', tool_p2j_d: 'Minden PDF oldalt külön JPG képpé alakítunk.', tool_j2p_t: 'Képből PDF', tool_j2p_d: 'Képek egyesítése egyetlen PDF dokumentumba.', tool_i2w_t: 'Képből WebP', tool_i2w_d: 'Képek konvertálása WebP formátumba.', tool_qr_t: 'QR Kód Stúdió', tool_qr_d: 'Generálj testreszabott QR kódokat.', tool_rotate_t: 'PDF Forgatása', tool_rotate_d: 'Forgasd el a PDF fájlok összes oldalát 90 fokkal.', tool_watermark_t: 'Vízjel Hozzáadása', tool_watermark_d: 'Szöveges vízjel elhelyezése a dokumentum minden oldalán.', tool_protect_t: 'PDF Titkosítása', tool_protect_d: 'Védjd meg a PDF fájljaidat egy jelszóval.', tool_unlock_t: 'PDF Feloldása', tool_unlock_d: 'Jelszóval védett PDF fájlok feloldása.', tool_pagenum_t: 'Oldalszámok', tool_pagenum_d: 'Oldalszámok automatikus hozzáadása a dokumentum aljára.', toast_welcome: 'Üdv a ProKonvert-ben!', toast_no_files: 'Kérlek válassz ki legalább egy fájlt!', toast_error: 'Hiba: ', toast_success: 'A művelet sikeresen befejeződött!', prompt_watermark: 'Kérlek, add meg a vízjel szövegét (pl. PISZKOZAT):', prompt_protect: 'Kérlek, add meg a jelszót, amivel titkosítani szeretnéd a PDF-et:', prompt_unlock: 'Kérlek, add meg a PDF fájl jelenlegi jelszavát a feloldáshoz:', wm_title: 'Vízjel Beállítások', wm_tab_text: 'Szöveg beírása', wm_tab_image: 'Kép feltöltése (PNG/JPG)', wm_text: 'Vízjel Szövege', wm_color: 'Szín', wm_image: 'Saját Kép Fájl (Logó)', wm_pos_x: 'Pozíció X (%)', wm_pos_y: 'Pozíció Y (%)', wm_size: 'Méret / Skálázás', wm_rot: 'Forgatás (fok)', wm_opac: 'Átlátszóság (%)', wm_preview_btn: 'Élő előnézet generálása (PDF feltöltése után)', wm_draft: 'PISZKOZAT', toast_wm_img_req: 'Kérlek válassz ki egy vízjel képet (PNG/JPG)!', file_unknown: 'ismeretlen', file_suffix_wm: '_vizjellel', toast_preview_req: 'Kérlek tölts fel egy PDF-et először a vázlathoz!', toast_preview_err: 'Hiba az előnézet betöltésekor.', preview_btn_loading: 'Betöltés...', preview_btn_update: 'Előnézet Frissítése', meta_desc_default: 'Ingyenes, böngészőben futó PDF és képkonvertáló. PDF egyesítés, darabolás, forgatás, vízjelezés, titkosítás és QR kód generálás szerver feltöltés nélkül.', meta_title_default: 'ProConvert - Ingyenes PDF és Kép Eszközök', toast_zip_creating: 'ZIP archívum készítése...', qr_tab_text: 'Szöveg / URL', qr_tab_phone: 'Telefonszám', qr_phone_label: 'Telefonszám', toast_qr_phone_invalid: 'Kérlek adj meg egy érvényes telefonszámot (7-15 számjegy)!', qr_tab_card: 'Bankkártya', qr_card_label: 'Bankkártya száma', qr_card_hint: 'Olvasd be a kamerával és kattints a "Másolás" gombra a kártyaszám mentéséhez', toast_qr_card_invalid: 'A kártyaszámnak 13 és 19 számjegy között kell lennie!', toast_qr_card_luhn_warning: 'Figyelem: Ellenőrizd a kártyaszámot (Luhn ellenőrzés nem sikerült).' },
    de: { settings: 'Einstellungen', home_title: 'Alle PDF und Bild Tools', home_desc: 'Wählen Sie das Werkzeug für die schnelle Konvertierung aus.', back_to_tools: 'Zurück', drop_title: 'Dateien hier ablegen', drop_or: 'oder <span class=\'browse-link\'>klicken zum Durchsuchen</span>', clear_all: 'Alles löschen', qr_content: 'Inhalt', qr_fg: 'Vordergrund', qr_bg: 'Hintergrund', qr_size: 'Größe (px)', qr_err: 'Fehlerkorrektur', generate_qr: 'QR-Code erstellen', qr_copy: 'Kopieren', qr_dl: 'PNG herunterladen', qr_placeholder: 'QR-Code erscheint hier', settings_title: 'Einstellungen', set_jpg_q: 'JPG-Qualität', set_pdf_dpi: 'PDF-Auflösung (DPI)', set_webp_q: 'WebP-Qualität', set_auto_dl: 'Auto-Download', preview_title: 'Vorschau', processing: 'Verarbeitung...', files_selected: 'Dateien ausgewählt', tool_merge_t: 'PDF zusammenfügen', tool_merge_d: 'Mehrere PDF-Dateien zu einem Dokument zusammenfügen.', tool_split_t: 'PDF teilen', tool_split_d: 'Trennen Sie eine PDF-Datei in einzelne Seiten.', tool_p2j_t: 'PDF zu JPG', tool_p2j_d: 'Jede PDF-Seite in ein JPG-Bild umwandeln.', tool_j2p_t: 'JPG zu PDF', tool_j2p_d: 'Bilder zu einem einzigen PDF-Dokument zusammenfügen.', tool_i2w_t: 'Bild zu WebP', tool_i2w_d: 'Bilder in das WebP-Format konvertieren.', tool_qr_t: 'QR-Code-Studio', tool_qr_d: 'Erstellen Sie individuelle QR-Codes.', tool_rotate_t: 'PDF drehen', tool_rotate_d: 'Alle Seiten um 90 Grad drehen.', tool_watermark_t: 'Wasserzeichen', tool_watermark_d: 'Text-Wasserzeichen auf jeder Seite hinzufügen.', tool_protect_t: 'PDF schützen', tool_protect_d: 'Schützen Sie Ihre PDF mit einem Passwort.', tool_unlock_t: 'PDF entsperren', tool_unlock_d: 'Passwortgeschützte PDFs entsperren.', tool_pagenum_t: 'Seitenzahlen', tool_pagenum_d: 'Seitenzahlen zum Dokument hinzufügen.', toast_welcome: 'Willkommen!', toast_no_files: 'Bitte wählen Sie Dateien aus!', toast_error: 'Fehler: ', toast_success: 'Erfolgreich abgeschlossen!', prompt_watermark: 'Wasserzeichentext eingeben:', prompt_protect: 'Passwort zur Verschlüsselung eingeben:', prompt_unlock: 'Aktuelles Passwort eingeben:', wm_title: 'Wasserzeichen-Einstellungen', wm_tab_text: 'Text eingeben', wm_tab_image: 'Bild hochladen (PNG/JPG)', wm_text: 'Wasserzeichen-Text', wm_color: 'Farbe', wm_image: 'Eigene Bilddatei (Logo)', wm_pos_x: 'Position X (%)', wm_pos_y: 'Position Y (%)', wm_size: 'Größe / Skalierung', wm_rot: 'Rotation (Grad)', wm_opac: 'Deckkraft (%)', wm_preview_btn: 'Live-Vorschau generieren', wm_draft: 'ENTWURF', toast_wm_img_req: 'Bitte wählen Sie ein Wasserzeichenbild aus (PNG/JPG)!', file_unknown: 'unbekannt', file_suffix_wm: '_wasserzeichen', toast_preview_req: 'Bitte laden Sie zuerst ein PDF für die Vorschau hoch!', toast_preview_err: 'Fehler beim Laden der Vorschau.', preview_btn_loading: 'Laden...', preview_btn_update: 'Vorschau aktualisieren', meta_desc_default: 'Kostenloser, browserbasierter PDF- und Bildkonverter. PDF zusammenfügen, teilen, drehen, Wasserzeichen hinzufügen, verschlüsseln und QR-Codes ohne Server-Upload generieren.', meta_title_default: 'ProConvert - Kostenlose PDF- und Bildwerkzeuge', toast_zip_creating: 'ZIP-Archiv wird erstellt...', qr_tab_text: 'Text / URL', qr_tab_phone: 'Telefonanruf', qr_phone_label: 'Telefonnummer', toast_qr_phone_invalid: 'Bitte geben Sie eine gültige Telefonnummer ein (7-15 Ziffern)!', qr_tab_card: 'Bankkarte', qr_card_label: 'Kartennummer', qr_card_hint: 'Mit der Kamera scannen und auf "Kopieren" klicken, um die Kartennummer zu speichern', toast_qr_card_invalid: 'Die Kartennummer muss zwischen 13 und 19 Ziffern enthalten!', toast_qr_card_luhn_warning: 'Warnung: Bitte Kartennummer überprüfen (Luhn-Prüfsumme fehlgeschlagen).' },
    es: { settings: 'Ajustes', home_title: 'Herramientas PDF e Imagen', home_desc: 'Seleccione la herramienta que desea utilizar.', back_to_tools: 'Volver', drop_title: 'Suelta archivos aquí', drop_or: 'o <span class=\'browse-link\'>buscar</span>', clear_all: 'Borrar todo', qr_content: 'Contenido', qr_fg: 'Primer plano', qr_bg: 'Fondo', qr_size: 'Tamaño (px)', qr_err: 'Corrección', generate_qr: 'Generar QR', qr_copy: 'Copiar', qr_dl: 'Descargar PNG', qr_placeholder: 'El código QR aparecerá aquí', settings_title: 'Ajustes', set_jpg_q: 'Calidad JPG', set_pdf_dpi: 'Resolución PDF (DPI)', set_webp_q: 'Calidad WebP', set_auto_dl: 'Descarga automática', preview_title: 'Vista previa', processing: 'Procesando...', files_selected: 'archivos seleccionados', tool_merge_t: 'Unir PDF', tool_merge_d: 'Combine varios archivos PDF en uno.', tool_split_t: 'Dividir PDF', tool_split_d: 'Separe un PDF en páginas.', tool_p2j_t: 'PDF a JPG', tool_p2j_d: 'Convierta páginas de PDF en JPG.', tool_j2p_t: 'JPG a PDF', tool_j2p_d: 'Combine imágenes en un solo PDF.', tool_i2w_t: 'Imagen a WebP', tool_i2w_d: 'Convierta imágenes a WebP.', tool_qr_t: 'Estudio QR', tool_qr_d: 'Genere códigos QR.', tool_rotate_t: 'Rotar PDF', tool_rotate_d: 'Rote todas las páginas 90 grados.', tool_watermark_t: 'Marca de agua', tool_watermark_d: 'Añada una marca de agua a cada página.', tool_protect_t: 'Proteger PDF', tool_protect_d: 'Proteja su PDF con contraseña.', tool_unlock_t: 'Desbloquear PDF', tool_unlock_d: 'Desbloquee archivos PDF protegidos.', tool_pagenum_t: 'Números de página', tool_pagenum_d: 'Añada números de página.', toast_welcome: '¡Bienvenido!', toast_no_files: '¡Seleccione un archivo!', toast_error: 'Error: ', toast_success: '¡Operación exitosa!', prompt_watermark: 'Texto de la marca de agua:', prompt_protect: 'Contraseña para cifrar:', prompt_unlock: 'Contraseña actual:', wm_title: 'Ajustes de Marca de Agua', wm_tab_text: 'Introducir Texto', wm_tab_image: 'Subir Imagen (PNG/JPG)', wm_text: 'Texto de Marca de Agua', wm_color: 'Color', wm_image: 'Archivo de Imagen Personalizado (Logo)', wm_pos_x: 'Posición X (%)', wm_pos_y: 'Posición Y (%)', wm_size: 'Tamaño / Escala', wm_rot: 'Rotación (grados)', wm_opac: 'Opacidad (%)', wm_preview_btn: 'Generar Vista Previa en Vivo', wm_draft: 'BORRADOR', toast_wm_img_req: '¡Por favor seleccione una imagen de marca de agua (PNG/JPG)!', file_unknown: 'desconocido', file_suffix_wm: '_marca_de_agua', toast_preview_req: '¡Por favor suba un PDF primero para la vista previa!', toast_preview_err: 'Error al cargar la vista previa.', preview_btn_loading: 'Cargando...', preview_btn_update: 'Actualizar Vista Previa', meta_desc_default: 'Convertidor gratuito de PDF e imágenes basado en navegador. Combina, divide, rota, pon marca de agua, encripta PDF y genera códigos QR sin necesidad de subir nada al servidor.', meta_title_default: 'ProConvert - Herramientas Gratuitas de PDF e Imagen', toast_zip_creating: 'Creando archivo ZIP...', qr_tab_text: 'Texto / URL', qr_tab_phone: 'Llamada telefónica', qr_phone_label: 'Número de teléfono', toast_qr_phone_invalid: '¡Por favor ingrese un número de teléfono válido (7-15 dígitos)!', qr_tab_card: 'Tarjeta bancaria', qr_card_label: 'Número de tarjeta', qr_card_hint: 'Escanee con la cámara y haga clic en "Copiar" para guardar el número de tarjeta', toast_qr_card_invalid: '¡El número de tarjeta debe tener entre 13 y 19 dígitos!', toast_qr_card_luhn_warning: 'Advertencia: Verifique los dígitos de la tarjeta (falló el algoritmo de Luhn).' },
    fr: { settings: 'Paramètres', home_title: 'Outils PDF et Image', home_desc: 'Sélectionnez l\'outil que vous souhaitez utiliser.', back_to_tools: 'Retour', drop_title: 'Déposez les fichiers', drop_or: 'ou <span class=\'browse-link\'>parcourir</span>', clear_all: 'Tout effacer', qr_content: 'Contenu', qr_fg: 'Premier plan', qr_bg: 'Arrière-plan', qr_size: 'Taille (px)', qr_err: 'Correction', generate_qr: 'Générer QR', qr_copy: 'Copier', qr_dl: 'Télécharger PNG', qr_placeholder: 'Le code QR apparaîtra ici', settings_title: 'Paramètres', set_jpg_q: 'Qualité JPG', set_pdf_dpi: 'Résolution PDF (DPI)', set_webp_q: 'Qualité WebP', set_auto_dl: 'Téléchargement auto', preview_title: 'Aperçu', processing: 'Traitement...', files_selected: 'fichiers sélectionnés', tool_merge_t: 'Fusionner PDF', tool_merge_d: 'Combinez plusieurs fichiers PDF.', tool_split_t: 'Diviser PDF', tool_split_d: 'Séparez un PDF en pages.', tool_p2j_t: 'PDF en JPG', tool_p2j_d: 'Convertissez chaque page en JPG.', tool_j2p_t: 'JPG en PDF', tool_j2p_d: 'Combinez des images en un seul PDF.', tool_i2w_t: 'Image en WebP', tool_i2w_d: 'Convertissez des images en WebP.', tool_qr_t: 'Studio QR Code', tool_qr_d: 'Générez des codes QR.', tool_rotate_t: 'Faire pivoter', tool_rotate_d: 'Faites pivoter toutes les pages.', tool_watermark_t: 'Filigrane', tool_watermark_d: 'Placez un filigrane sur chaque page.', tool_protect_t: 'Protéger PDF', tool_protect_d: 'Protégez votre PDF.', tool_unlock_t: 'Déverrouiller', tool_unlock_d: 'Déverrouillez les fichiers protégés.', tool_pagenum_t: 'Numéros de page', tool_pagenum_d: 'Ajoutez des numéros de page.', toast_welcome: 'Bienvenue!', toast_no_files: 'Veuillez sélectionner un fichier!', toast_error: 'Erreur: ', toast_success: 'Opération réussie!', prompt_watermark: 'Texte du filigrane:', prompt_protect: 'Mot de passe pour crypter:', prompt_unlock: 'Mot de passe actuel:', wm_title: 'Paramètres du Filigrane', wm_tab_text: 'Saisir le Texte', wm_tab_image: 'Télécharger une Image (PNG/JPG)', wm_text: 'Texte du Filigrane', wm_color: 'Couleur', wm_image: 'Fichier Image Personnalisé (Logo)', wm_pos_x: 'Position X (%)', wm_pos_y: 'Position Y (%)', wm_size: 'Taille / Échelle', wm_rot: 'Rotation (degrés)', wm_opac: 'Opacité (%)', wm_preview_btn: 'Générer un Aperçu en Direct', wm_draft: 'BROUILLON', toast_wm_img_req: 'Veuillez sélectionner une image de filigrane (PNG/JPG)!', file_unknown: 'inconnu', file_suffix_wm: '_filigrane', toast_preview_req: 'Veuillez d\'abord télécharger un PDF pour l\'aperçu!', toast_preview_err: 'Erreur lors du chargement de l\'aperçu.', preview_btn_loading: 'Chargement...', preview_btn_update: 'Mettre à jour l\'aperçu', meta_desc_default: 'Convertisseur PDF et image gratuit et en ligne. Fusionnez, divisez, faites pivoter, ajoutez un filigrane, cryptez vos PDF et générez des QR codes sans téléchargement sur serveur.', meta_title_default: 'ProConvert - Outils PDF et Image Gratuits', toast_zip_creating: 'Création de l\'archive ZIP...', qr_tab_text: 'Texte / URL', qr_tab_phone: 'Appel téléphonique', qr_phone_label: 'Numéro de téléphone', toast_qr_phone_invalid: 'Veuillez entrer un numéro de téléphone valide (7-15 chiffres)!', qr_tab_card: 'Carte bancaire', qr_card_label: 'Numéro de carte', qr_card_hint: 'Scannez avec l\'appareil photo et cliquez sur "Copier" pour enregistrer le numéro de carte', toast_qr_card_invalid: 'Le numéro de carte doit contenir entre 13 et 19 chiffres !', toast_qr_card_luhn_warning: 'Avertissement : Vérifiez le numéro de carte (échec de la somme de contrôle Luhn).' }
};

let currentLang = localStorage.getItem('prokonvert-lang') || 'en';
function t(key) { return translations[currentLang][key] || translations['en'][key] || key; }

const state = { mode: '', files: [], processing: false, settings: { jpgQuality: 0.9, pdfDpi: 150, webpQuality: 0.8, autoDownload: true } };

const modeConfig = {
    mergePdf: { titleKey: 'tool_merge_t', descKey: 'tool_merge_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-red', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>' },
    splitPdf: { titleKey: 'tool_split_t', descKey: 'tool_split_d', accept: 'application/pdf', multiple: false, iconClass: 'icon-orange', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 15h6v6M21 9h-6V3M3 21l7-7M21 3l-7 7"/></svg>' },
    pdfToJpg: { titleKey: 'tool_p2j_t', descKey: 'tool_p2j_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-orange', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13l2 2 4-4"/></svg>' },
    jpgToPdf: { titleKey: 'tool_j2p_t', descKey: 'tool_j2p_d', accept: 'image/jpeg,image/png,image/webp,image/gif', multiple: true, iconClass: 'icon-red', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>' },
    imgToWebp: { titleKey: 'tool_i2w_t', descKey: 'tool_i2w_d', accept: 'image/jpeg,image/png,image/gif,image/bmp', multiple: true, iconClass: 'icon-purple', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' },
    qrCode: { titleKey: 'tool_qr_t', descKey: 'tool_qr_d', accept: '', multiple: false, iconClass: 'icon-green', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
    rotatePdf: { titleKey: 'tool_rotate_t', descKey: 'tool_rotate_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-purple', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' },
    watermarkPdf: { titleKey: 'tool_watermark_t', descKey: 'tool_watermark_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-blue', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
    protectPdf: { titleKey: 'tool_protect_t', descKey: 'tool_protect_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-red', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
    unlockPdf: { titleKey: 'tool_unlock_t', descKey: 'tool_unlock_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-green', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>' },
    pageNumbersPdf: { titleKey: 'tool_pagenum_t', descKey: 'tool_pagenum_d', accept: 'application/pdf', multiple: true, iconClass: 'icon-orange', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><text x="10" y="16" font-size="6" font-family="sans-serif">1</text></svg>' }
};

const els = {
    themeToggle: document.getElementById('themeToggle'), toastContainer: document.getElementById('toastContainer'), langSelect: document.getElementById('langSelect'),
    homeView: document.getElementById('homeView'), toolView: document.getElementById('toolView'), toolsGrid: document.getElementById('toolsGrid'), backToHomeBtn: document.getElementById('backToHomeBtn'), homeLogo: document.getElementById('homeLogo'),
    pageTitle: document.getElementById('pageTitle'), pageDesc: document.getElementById('pageDesc'), converterSection: document.getElementById('converterSection'), qrSection: document.getElementById('qrSection'),
    dropZone: document.getElementById('dropZone'), fileInput: document.getElementById('fileInput'), fileList: document.getElementById('fileList'), fileTypes: document.getElementById('fileTypes'), batchActions: document.getElementById('batchActions'), batchCount: document.getElementById('batchCount'), batchSize: document.getElementById('batchSize'), clearAllBtn: document.getElementById('clearAllBtn'), convertAllBtn: document.getElementById('convertAllBtn'), convertBtnText: document.getElementById('convertBtnText'),
    settingsBtn: document.getElementById('settingsBtn'), settingsModal: document.getElementById('settingsModal'), closeSettings: document.getElementById('closeSettings'), previewModal: document.getElementById('previewModal'), closePreview: document.getElementById('closePreview'), previewContainer: document.getElementById('previewContainer'),
    qrInputData: document.getElementById('qrInputData'), qrColorDark: document.getElementById('qrColorDark'), qrColorLight: document.getElementById('qrColorLight'), qrSize: document.getElementById('qrSize'), qrSizeValue: document.getElementById('qrSizeValue'), qrErrorLevel: document.getElementById('qrErrorLevel'), generateQrBtn: document.getElementById('generateQrBtn'), qrPreviewBox: document.getElementById('qrPreviewBox'), qrActions: document.getElementById('qrActions'), downloadQrBtn: document.getElementById('downloadQrBtn'), copyQrBtn: document.getElementById('copyQrBtn'),
    jpgQuality: document.getElementById('jpgQuality'), jpgQualityValue: document.getElementById('jpgQualityValue'), pdfDpi: document.getElementById('pdfDpi'), pdfDpiValue: document.getElementById('pdfDpiValue'), webpQuality: document.getElementById('webpQuality'), webpQualityValue: document.getElementById('webpQualityValue'), autoDownload: document.getElementById('autoDownload')
};

// Допоміжна функція для безпечного отримання значень із DOM за кількома можливими ID
function getDomValue(possibleIds, defaultValue = '') {
    const ids = Array.isArray(possibleIds) ? possibleIds : [possibleIds];
    for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.value !== undefined && el.value !== null) {
            return el.value;
        }
    }
    return defaultValue;
}

function updateLanguageUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { if (el.hasAttribute('placeholder')) el.placeholder = t(key); } else { el.innerHTML = t(key); } });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
    document.querySelectorAll('[data-i18n-value]').forEach(el => { el.value = t(el.getAttribute('data-i18n-value')); });
    if (els.homeView.style.display !== 'none') renderToolsGrid();
    if (state.mode) { els.pageTitle.textContent = t(modeConfig[state.mode].titleKey); els.pageDesc.textContent = t(modeConfig[state.mode].descKey); els.convertBtnText.textContent = t(modeConfig[state.mode].titleKey); }
    updateBatchInfo();

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = state.mode ? t(modeConfig[state.mode].descKey) : t('meta_desc_default');
    document.title = state.mode ? `ProConvert - ${t(modeConfig[state.mode].titleKey)}` : t('meta_title_default');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = metaDesc?.content || '';
}

function initTheme() {
    const saved = localStorage.getItem('prokonvert-theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
    if (els.langSelect) { els.langSelect.value = currentLang; els.langSelect.addEventListener('change', (e) => { currentLang = e.target.value; localStorage.setItem('prokonvert-lang', currentLang); updateLanguageUI(); }); }
}

els.themeToggle.addEventListener('click', () => { const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', next); localStorage.setItem('prokonvert-theme', next); });

function showToast(message, type = 'info', duration = 4000) {
    const toast = document.createElement('div'); toast.className = 'toast ' + type;
    const icons = { success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', error: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>', warning: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>', info: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' };
    toast.innerHTML = (icons[type] || icons.info) + '<span>' + message + '</span>'; els.toastContainer.appendChild(toast); setTimeout(() => { toast.style.animation = 'toastFade 0.3s forwards'; setTimeout(() => toast.remove(), 300); }, duration);
}

function renderToolsGrid() {
    els.toolsGrid.innerHTML = ''; Object.entries(modeConfig).forEach(([modeKey, config]) => {
        const card = document.createElement('div'); card.className = 'tool-card';
        card.innerHTML = '<div class="tool-icon ' + config.iconClass + '">' + config.icon + '</div><h3>' + t(config.titleKey) + '</h3><p>' + t(config.descKey) + '</p>'; card.addEventListener('click', () => setMode(modeKey)); els.toolsGrid.appendChild(card);
    });
}

function setMode(mode) {
    state.mode = mode; const config = modeConfig[mode]; els.pageTitle.textContent = t(config.titleKey); els.pageDesc.textContent = t(config.descKey);
    if (mode === 'qrCode') { els.converterSection.style.display = 'none'; els.qrSection.style.display = 'block'; } else { els.converterSection.style.display = 'block'; els.qrSection.style.display = 'none'; els.fileInput.accept = config.accept; els.fileInput.multiple = config.multiple; els.convertBtnText.textContent = t(config.titleKey); }
    const wmPanel = document.getElementById('watermarkPanel');
    if (wmPanel) wmPanel.style.display = (mode === 'watermarkPdf') ? 'block' : 'none';
    clearFiles(); els.homeView.style.display = 'none'; els.toolView.style.display = 'block'; window.scrollTo(0, 0);
}

function goHome() { els.toolView.style.display = 'none'; els.homeView.style.display = 'block'; clearFiles(); } 
els.backToHomeBtn.addEventListener('click', goHome); els.homeLogo.addEventListener('click', goHome);

function formatBytes(bytes) { if (bytes === 0) return '0 B'; const k = 1024, sizes = ['B', 'KB', 'MB', 'GB'], i = Math.floor(Math.log(bytes) / Math.log(k)); return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]; }

function getFileIcon(file) { if (file.type.startsWith('image/')) return '<img src="' + URL.createObjectURL(file) + '" alt="preview" onload="URL.revokeObjectURL(this.src)">'; if (file.type === 'application/pdf') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;color:#ef4444;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'; return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;color:var(--text-muted);"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>'; }

// Асинхронна генерація мініатюри першої сторінки PDF
async function generatePdfThumbnail(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const page = await pdf.getPage(1);
        
        const viewport = page.getViewport({ scale: 0.2 });
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        await page.render({ canvasContext: ctx, viewport }).promise;
        const dataUrl = canvas.toDataURL('image/png');
        
        canvas.width = 0;
        canvas.height = 0;
        
        return dataUrl;
    } catch (err) {
        console.warn('Неможливо згенерувати мініатюру PDF:', err);
        return null;
    }
}

function addFiles(fileList) { const config = modeConfig[state.mode]; const validFiles = Array.from(fileList).filter(file => { if (!config.accept) return true; return config.accept.split(',').some(type => file.type.startsWith(type.trim().replace('/*', '')) || file.type === type.trim()); }); validFiles.forEach(file => { if (!state.files.find(f => f.name === file.name && f.size === file.size)) state.files.push(file); }); renderFileList(); updateBatchInfo(); }
function removeFile(index) { state.files.splice(index, 1); renderFileList(); updateBatchInfo(); } 
function clearFiles() { state.files = []; renderFileList(); updateBatchInfo(); els.fileInput.value = ''; }

function renderFileList() {
    els.fileList.innerHTML = '';
    state.files.forEach((file, index) => {
        const card = document.createElement('div');
        card.className = 'file-card';
        card.dataset.index = index;
        card.setAttribute('draggable', 'true');

        let btnHTML = (file.type.startsWith('image/') || file.type === 'application/pdf') 
            ? '<button class="file-btn preview" data-index="' + index + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>' 
            : '';
        btnHTML += '<button class="file-btn remove" data-index="' + index + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';

        const dragHandleHTML = '<div class="drag-handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg></div>';

        card.innerHTML = dragHandleHTML + '<div class="file-icon" id="file-icon-' + index + '">' + getFileIcon(file) + '</div><div class="file-info"><div class="file-name">' + file.name + '</div><div class="file-meta"><span>' + formatBytes(file.size) + '</span><span>' + (file.type || t('file_unknown')) + '</span></div><div class="progress-bar" id="progress-' + index + '"><div class="progress-fill" id="fill-' + index + '"></div></div></div><div class="file-actions">' + btnHTML + '</div>';

        els.fileList.appendChild(card);

        if (file.type === 'application/pdf') {
            generatePdfThumbnail(file).then(thumbUrl => {
                const iconContainer = document.getElementById('file-icon-' + index);
                if (iconContainer && thumbUrl) {
                    iconContainer.innerHTML = '<img src="' + thumbUrl + '" alt="PDF thumbnail" style="width:100%; height:100%; object-fit:cover;">';
                }
            });
        }

        card.querySelector('.file-btn.remove')?.addEventListener('click', (e) => { e.stopPropagation(); removeFile(index); });
        card.querySelector('.file-btn.preview')?.addEventListener('click', (e) => { e.stopPropagation(); showPreview(file); });
    });

    initDragAndDrop();
}

function initDragAndDrop() {
    const cards = els.fileList.querySelectorAll('.file-card');
    
    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            card.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            
            const newFilesOrder = [];
            els.fileList.querySelectorAll('.file-card').forEach(c => {
                const oldIndex = parseInt(c.dataset.index);
                newFilesOrder.push(state.files[oldIndex]);
            });
            state.files = newFilesOrder;
            
            els.fileList.querySelectorAll('.file-card').forEach((c, idx) => {
                c.dataset.index = idx;
            });
        });
    });

    els.fileList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingCard = els.fileList.querySelector('.dragging');
        if (!draggingCard) return;

        const siblings = [...els.fileList.querySelectorAll('.file-card:not(.dragging)')];
        const nextSibling = siblings.find(sibling => {
            const box = sibling.getBoundingClientRect();
            return e.clientY <= box.top + box.height / 2;
        });

        if (nextSibling) {
            els.fileList.insertBefore(draggingCard, nextSibling);
        } else {
            els.fileList.appendChild(draggingCard);
        }
    });
}

function updateBatchInfo() { if (state.files.length === 0) { els.batchActions.style.display = 'none'; return; } els.batchActions.style.display = 'flex'; els.batchCount.textContent = state.files.length + ' ' + t('files_selected'); els.batchSize.textContent = formatBytes(state.files.reduce((sum, f) => sum + f.size, 0)); }
function updateProgress(index, percent) { const bar = document.getElementById('progress-' + index), fill = document.getElementById('fill-' + index); if (bar && fill) { bar.classList.add('active'); fill.style.width = percent + '%'; } }
function setFileStatus(index, status) { const card = document.querySelector('.file-card[data-index="' + index + '"]'); if (card) { card.classList.remove('processing', 'completed', 'error'); if (status) card.classList.add(status); } }

els.dropZone.addEventListener('click', () => els.fileInput.click()); 
els.dropZone.addEventListener('dragover', (e) => { e.preventDefault(); els.dropZone.classList.add('drag-over'); }); 
els.dropZone.addEventListener('dragleave', () => els.dropZone.classList.remove('drag-over')); 
els.dropZone.addEventListener('drop', (e) => { e.preventDefault(); els.dropZone.classList.remove('drag-over'); if (e.dataTransfer.files.length > 0) addFiles(e.dataTransfer.files); }); 
els.fileInput.addEventListener('change', () => { if (els.fileInput.files.length > 0) { addFiles(els.fileInput.files); els.fileInput.value = ''; } }); 
els.clearAllBtn.addEventListener('click', clearFiles);

async function showPreview(file) {
    els.previewContainer.innerHTML = '';
    if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        const url = URL.createObjectURL(file);
        img.src = url;
        img.onload = () => URL.revokeObjectURL(url);
        img.style.maxWidth = '100%';
        img.style.maxHeight = '70vh';
        img.style.borderRadius = '8px';
        els.previewContainer.appendChild(img);
    } else if (file.type === 'application/pdf') {
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 1.0 });
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.style.maxWidth = '100%';
            canvas.style.maxHeight = '70vh';
            canvas.style.borderRadius = '8px';
            await page.render({ canvasContext: ctx, viewport }).promise;
            els.previewContainer.appendChild(canvas);
        } catch (e) {
            showToast(t('toast_preview_err'), 'error');
            return;
        }
    }
    els.previewModal.classList.add('active');
}

els.closePreview.addEventListener('click', () => els.previewModal.classList.remove('active')); 
els.previewModal.addEventListener('click', (e) => { if (e.target === els.previewModal) els.previewModal.classList.remove('active'); });

function loadSettings() { const saved = localStorage.getItem('prokonvert-settings'); if (saved) state.settings = { ...state.settings, ...JSON.parse(saved) }; if (els.jpgQuality) { els.jpgQuality.value = Math.round(state.settings.jpgQuality * 100); if (els.jpgQualityValue) els.jpgQualityValue.textContent = Math.round(state.settings.jpgQuality * 100) + '%'; } if (els.pdfDpi) { els.pdfDpi.value = state.settings.pdfDpi; if (els.pdfDpiValue) els.pdfDpiValue.textContent = state.settings.pdfDpi + ' DPI'; } if (els.webpQuality) { els.webpQuality.value = Math.round(state.settings.webpQuality * 100); if (els.webpQualityValue) els.webpQualityValue.textContent = Math.round(state.settings.webpQuality * 100) + '%'; } if (els.autoDownload) els.autoDownload.checked = state.settings.autoDownload; }
function saveSettings() { if (els.jpgQuality) state.settings.jpgQuality = parseInt(els.jpgQuality.value) / 100; if (els.pdfDpi) state.settings.pdfDpi = parseInt(els.pdfDpi.value); if (els.webpQuality) state.settings.webpQuality = parseInt(els.webpQuality.value) / 100; if (els.autoDownload) state.settings.autoDownload = els.autoDownload.checked; localStorage.setItem('prokonvert-settings', JSON.stringify(state.settings)); }

els.settingsBtn.addEventListener('click', () => els.settingsModal.classList.add('active')); 
els.closeSettings.addEventListener('click', () => els.settingsModal.classList.remove('active')); 
els.settingsModal.addEventListener('click', (e) => { if (e.target === els.settingsModal) els.settingsModal.classList.remove('active'); }); 
if (els.jpgQuality) els.jpgQuality.addEventListener('input', () => { els.jpgQualityValue.textContent = els.jpgQuality.value + '%'; saveSettings(); }); 
if (els.pdfDpi) els.pdfDpi.addEventListener('input', () => { els.pdfDpiValue.textContent = els.pdfDpi.value + ' DPI'; saveSettings(); }); 
if (els.webpQuality) els.webpQuality.addEventListener('input', () => { els.webpQualityValue.textContent = els.webpQuality.value + '%'; saveSettings(); }); 
if (els.autoDownload) els.autoDownload.addEventListener('change', saveSettings);

function downloadBlob(pdfBytes, filename) { if (!state.settings.autoDownload) return; const blob = new Blob([pdfBytes], { type: 'application/pdf' }); const link = document.createElement('a'); const url = URL.createObjectURL(blob); link.href = url; link.download = filename; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }

els.convertAllBtn.addEventListener('click', async () => {
    if (state.files.length === 0) { showToast(t('toast_no_files'), 'warning'); return; }
    if (state.processing) return;
    state.processing = true;
    els.convertAllBtn.disabled = true;
    els.convertBtnText.textContent = t('processing');
    document.querySelector('#convertAllBtn svg').style.display = 'none';
    try {
        if (state.mode === 'pdfToJpg') await processPdfToJpg();
        else if (state.mode === 'jpgToPdf') await processJpgToPdf();
        else if (state.mode === 'imgToWebp') await processImgToWebp();
        else if (state.mode === 'mergePdf') await processMergePdf();
        else if (state.mode === 'splitPdf') await processSplitPdf();
        else if (state.mode === 'rotatePdf') await processRotatePdf();
        else if (state.mode === 'watermarkPdf') await processWatermarkPdf();
        else if (state.mode === 'protectPdf') await processProtectPdf();
        else if (state.mode === 'unlockPdf') await processUnlockPdf();
        else if (state.mode === 'pageNumbersPdf') await processPageNumbersPdf();
    } catch (err) {
        showToast(t('toast_error') + err.message, 'error');
    } finally {
        state.processing = false;
        els.convertAllBtn.disabled = false;
        els.convertBtnText.textContent = t(modeConfig[state.mode].titleKey);
        document.querySelector('#convertAllBtn svg').style.display = 'block';
    }
});

async function downloadFilesOrZip(filesToDownload, defaultZipName = 'converted_files.zip') {
    if (!state.settings.autoDownload || filesToDownload.length === 0) return;

    if (filesToDownload.length === 1) {
        const item = filesToDownload[0];
        const link = document.createElement('a');
        link.href = item.data || URL.createObjectURL(item.blob);
        link.download = item.name;
        link.click();
        if (item.blob) setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    } else {
        showToast(t('toast_zip_creating'), 'info');
        const zip = new JSZip();
        filesToDownload.forEach(fileItem => {
            if (fileItem.blob) {
                zip.file(fileItem.name, fileItem.blob);
            } else if (fileItem.data && fileItem.data.startsWith('data:')) {
                const base64Data = fileItem.data.split(',')[1];
                zip.file(fileItem.name, base64Data, { base64: true });
            }
        });
        const zipContent = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(zipContent);
        const link = document.createElement('a');
        link.href = url;
        link.download = defaultZipName;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
}

async function processMergePdf() { if (state.files.length < 2) return; setFileStatus(0, 'processing'); updateProgress(0, 10); const mergedPdf = await PDFLib.PDFDocument.create(); let totalPages = 0; for (let i = 0; i < state.files.length; i++) { updateProgress(0, 10 + ((i / state.files.length) * 80)); setFileStatus(i, 'processing'); const pdf = await PDFLib.PDFDocument.load(await state.files[i].arrayBuffer()); const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices()); copiedPages.forEach((page) => mergedPdf.addPage(page)); totalPages += copiedPages.length; setFileStatus(i, 'completed'); } updateProgress(0, 95); downloadBlob(await mergedPdf.save(), 'merged_document.pdf'); updateProgress(0, 100); showToast(t('toast_success'), 'success'); }

async function processSplitPdf() {
    let converted = 0;
    const generatedFiles = [];

    for (let i = 0; i < state.files.length; i++) {
        setFileStatus(i, 'processing');
        updateProgress(i, 10);
        const pdf = await PDFLib.PDFDocument.load(await state.files[i].arrayBuffer());
        const numPages = pdf.getPageCount();

        for (let p = 0; p < numPages; p++) {
            const newPdf = await PDFLib.PDFDocument.create();
            const [copiedPage] = await newPdf.copyPages(pdf, [p]);
            newPdf.addPage(copiedPage);
            const pdfBytes = await newPdf.save();
            const fileName = state.files[i].name.replace('.pdf', '_page_' + (p + 1) + '.pdf');
            generatedFiles.push({ name: fileName, blob: new Blob([pdfBytes], { type: 'application/pdf' }) });
            updateProgress(i, 10 + (((p + 1) / numPages) * 90));
        }
        setFileStatus(i, 'completed');
        converted += numPages;
    }

    if (generatedFiles.length > 0) {
        const zipName = state.files.length === 1
            ? state.files[0].name.replace('.pdf', '_pages.zip')
            : 'split_pages.zip';
        await downloadFilesOrZip(generatedFiles, zipName);
    }
    showToast(t('toast_success'), 'success');
}

async function processRotatePdf() { let converted = 0; for (let i = 0; i < state.files.length; i++) { setFileStatus(i, 'processing'); updateProgress(i, 50); const pdfDoc = await PDFLib.PDFDocument.load(await state.files[i].arrayBuffer()); pdfDoc.getPages().forEach(page => page.setRotation(PDFLib.degrees(page.getRotation().angle + 90))); downloadBlob(await pdfDoc.save(), state.files[i].name.replace('.pdf', '_rotated.pdf')); setFileStatus(i, 'completed'); updateProgress(i, 100); converted++; } showToast(t('toast_success'), 'success'); }

// ==================== МОДУЛЬ ВОДЯНОГО ЗНАКА (WATERMARK) ====================
let wmType = 'text';
let wmBgCanvas = document.createElement('canvas');
let wmImageObj = null;

document.getElementById('wmTabText')?.addEventListener('click', () => {
    wmType = 'text';
    const textSec = document.getElementById('wmTextSection');
    const imgSec = document.getElementById('wmImageSection');
    if (textSec) textSec.style.display = 'block';
    if (imgSec) imgSec.style.display = 'none';
    document.getElementById('wmTabText')?.classList.replace('btn-outline', 'btn-primary');
    document.getElementById('wmTabImage')?.classList.replace('btn-primary', 'btn-outline');
    renderWatermarkPreview();
});

document.getElementById('wmTabImage')?.addEventListener('click', () => {
    wmType = 'image';
    const textSec = document.getElementById('wmTextSection');
    const imgSec = document.getElementById('wmImageSection');
    if (textSec) textSec.style.display = 'none';
    if (imgSec) imgSec.style.display = 'block';
    document.getElementById('wmTabText')?.classList.replace('btn-primary', 'btn-outline');
    document.getElementById('wmTabImage')?.classList.replace('btn-outline', 'btn-primary');
    renderWatermarkPreview();
});

document.getElementById('wmPreviewBtn')?.addEventListener('click', async () => {
    if (!state.files || state.files.length === 0) {
        showToast(t('toast_preview_req'), 'warning');
        return;
    }
    const canvas = document.getElementById('wmCanvas');
    if (!canvas) return;
    
    canvas.style.display = 'block';

    try {
        const file = state.files[0];
        const arrayBuffer = await file.arrayBuffer();
        
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer.slice(0) }).promise;
        const wmBasePage = await pdf.getPage(1);

        const viewport = wmBasePage.getViewport({ scale: 1.0 });
        const scale = 400 / viewport.width;
        const scaledViewport = wmBasePage.getViewport({ scale });

        wmBgCanvas.width = scaledViewport.width;
        wmBgCanvas.height = scaledViewport.height;
        const ctxBg = wmBgCanvas.getContext('2d');
        
        await wmBasePage.render({ canvasContext: ctxBg, viewport: scaledViewport }).promise;

        renderWatermarkPreview();
    } catch (e) {
        console.error('Preview error details:', e);
        showToast(t('toast_preview_err'), 'error');
    }
});

document.getElementById('wmImageFile')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
        wmImageObj = new Image();
        wmImageObj.onload = renderWatermarkPreview;
        wmImageObj.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

['wmX', 'wmY', 'wmSize', 'wmOpacity', 'wmRot', 'wmText', 'wmColor', 'wm_pos_x', 'wm_pos_y', 'wm_size', 'wm_opac', 'wm_rot', 'wm_text', 'wm_color'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', renderWatermarkPreview);
});

function renderWatermarkPreview() {
    const canvas = document.getElementById('wmCanvas');
    if (!canvas || canvas.style.display === 'none') return;

    canvas.width = wmBgCanvas.width || 400;
    canvas.height = wmBgCanvas.height || 500;
    const ctx = canvas.getContext('2d');

    if (wmBgCanvas.width > 0) {
        ctx.drawImage(wmBgCanvas, 0, 0);
    }

    const xPct = (parseFloat(getDomValue(['wmX', 'wm_pos_x', 'wmPosX'], 50)) || 50) / 100;
    const yPct = (parseFloat(getDomValue(['wmY', 'wm_pos_y', 'wmPosY'], 50)) || 50) / 100;
    const sizePct = (parseFloat(getDomValue(['wmSize', 'wm_size'], 50)) || 50) / 100;
    const opacity = (parseFloat(getDomValue(['wmOpacity', 'wm_opac', 'wmOpacity'], 50)) || 50) / 100;
    const rotDegrees = parseFloat(getDomValue(['wmRot', 'wm_rot'], 0)) || 0;

    ctx.globalAlpha = isNaN(opacity) ? 0.5 : opacity;

    if (wmType === 'text') {
        const text = getDomValue(['wmText', 'wm_text'], 'DRAFT');
        let color = getDomValue(['wmColor', 'wm_color'], '#000000');
        const fontSize = 100 * sizePct;

        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = color;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        const x = xPct * canvas.width;
        const y = yPct * canvas.height;

        ctx.translate(x, y);
        ctx.rotate((rotDegrees * Math.PI) / 180);
        ctx.fillText(text, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    } else if (wmType === 'image' && wmImageObj) {
        const wmWidth = canvas.width * sizePct;
        const wmHeight = (wmWidth / wmImageObj.width) * wmImageObj.height;

        const x = xPct * canvas.width;
        const y = yPct * canvas.height;

        ctx.translate(x, y);
        ctx.rotate((rotDegrees * Math.PI) / 180);
        ctx.drawImage(wmImageObj, -wmWidth / 2, -wmHeight / 2, wmWidth, wmHeight);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    ctx.globalAlpha = 1.0;
}

async function processWatermarkPdf() {
    // Точне зчитування параметрів безпосередньо з UI за фактичними ID з index.html
    const xPct = (parseFloat(getDomValue(['wmX', 'wm_pos_x'], 50)) || 50) / 100;
    const yPctHTML = (parseFloat(getDomValue(['wmY', 'wm_pos_y'], 50)) || 50) / 100;
    const sizePct = (parseFloat(getDomValue(['wmSize', 'wm_size'], 100)) || 100) / 100;
    
    // Враховано правильний ID для прозорості: wmOpac
    const opacity = (parseFloat(getDomValue(['wmOpac', 'wmOpacity', 'wm_opac'], 30)) || 30) / 100;
    const rotDegrees = parseFloat(getDomValue(['wmRot', 'wm_rot'], 45)) || 0;

    let wmFile, wmBytes;
    if (wmType === 'image') {
        const wmFileInput = document.getElementById('wmImageFile') || document.getElementById('wm_image');
        if (!wmFileInput || !wmFileInput.files || !wmFileInput.files.length) {
            throw new Error(t('toast_wm_img_req'));
        }
        wmFile = wmFileInput.files[0];
        wmBytes = await wmFile.arrayBuffer();
    }

    let converted = 0;
    for (let i = 0; i < state.files.length; i++) {
        setFileStatus(i, 'processing');
        updateProgress(i, 20);

        const pdfBytes = await state.files[i].arrayBuffer();
        const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);

        let wmImage;
        if (wmType === 'image') {
            if (wmFile.type === 'image/png') wmImage = await pdfDoc.embedPng(wmBytes);
            else wmImage = await pdfDoc.embedJpg(wmBytes);
        }

        let font;
        if (wmType === 'text') {
            font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        }

        const pages = pdfDoc.getPages();
        for (let p = 0; p < pages.length; p++) {
            updateProgress(i, 20 + ((p / pages.length) * 70));
            const page = pages[p];
            const { width, height } = page.getSize();

            const x = width * xPct;
            const y = height - (height * yPctHTML);
            const safeRotDegrees = isNaN(rotDegrees) ? 0 : rotDegrees;
            const angle = -safeRotDegrees * Math.PI / 180;

            if (wmType === 'text') {
                const text = getDomValue(['wmText', 'wm_text'], 'DRAFT');
                
                let colorHex = getDomValue(['wmColor', 'wm_color'], '#ef4444');
                if (colorHex.length === 4) {
                    colorHex = '#' + colorHex[1]+colorHex[1] + colorHex[2]+colorHex[2] + colorHex[3]+colorHex[3];
                }
                const r = (parseInt(colorHex.slice(1, 3), 16) || 0) / 255;
                const g = (parseInt(colorHex.slice(3, 5), 16) || 0) / 255;
                const b = (parseInt(colorHex.slice(5, 7), 16) || 0) / 255;

                const fontSize = (width / 2) * sizePct;
                const textWidth = font.widthOfTextAtSize(text, fontSize);
                const textHeight = font.heightAtSize(fontSize);

                const dx = -textWidth / 2;
                const dy = -textHeight / 2;
                const rotDx = dx * Math.cos(angle) - dy * Math.sin(angle);
                const rotDy = dx * Math.sin(angle) + dy * Math.cos(angle);

                page.drawText(text, {
                    x: x + rotDx,
                    y: y + rotDy,
                    size: fontSize,
                    font: font,
                    color: PDFLib.rgb(r, g, b),
                    opacity: opacity,
                    rotate: PDFLib.degrees(-safeRotDegrees)
                });
            } else if (wmType === 'image') {
                const wmWidth = width * sizePct;
                const wmHeight = (wmWidth / wmImage.width) * wmImage.height;

                const dx = -wmWidth / 2;
                const dy = -wmHeight / 2;
                const rotDx = dx * Math.cos(angle) - dy * Math.sin(angle);
                const rotDy = dx * Math.sin(angle) + dy * Math.cos(angle);

                page.drawImage(wmImage, {
                    x: x + rotDx,
                    y: y + rotDy,
                    width: wmWidth,
                    height: wmHeight,
                    opacity: opacity,
                    rotate: PDFLib.degrees(-safeRotDegrees)
                });
            }
        }

        const savedPdf = await pdfDoc.save();
        downloadBlob(savedPdf, state.files[i].name.replace('.pdf', t('file_suffix_wm') + '.pdf'));
        setFileStatus(i, 'completed');
        updateProgress(i, 100);
        converted++;
    }

    if (converted > 0) showToast(t('toast_success'), 'success');
}
// ==================== ІНШІ ІМПЛЕМЕНТАЦІЇ ====================
async function processProtectPdf() { const password = prompt(t('prompt_protect')); if (!password) return; let converted = 0; for (let i = 0; i < state.files.length; i++) { setFileStatus(i, 'processing'); updateProgress(i, 50); const pdfDoc = await PDFLib.PDFDocument.load(await state.files[i].arrayBuffer()); const savedPdf = await pdfDoc.save({ userPassword: password, ownerPassword: password, permissions: { printing: 'highResolution', modifying: false, copying: false } }); downloadBlob(savedPdf, state.files[i].name.replace('.pdf', '_protected.pdf')); setFileStatus(i, 'completed'); updateProgress(i, 100); converted++; } showToast(t('toast_success'), 'success'); }

async function processUnlockPdf() { const password = prompt(t('prompt_unlock')); if (!password) return; let converted = 0; for (let i = 0; i < state.files.length; i++) { setFileStatus(i, 'processing'); updateProgress(i, 50); try { const pdfDoc = await PDFLib.PDFDocument.load(await state.files[i].arrayBuffer(), { password: password }); downloadBlob(await pdfDoc.save(), state.files[i].name.replace('.pdf', '_unlocked.pdf')); setFileStatus(i, 'completed'); updateProgress(i, 100); converted++; } catch (e) { setFileStatus(i, 'error'); showToast(t('toast_error') + ' Wrong password', 'error'); } } if (converted > 0) showToast(t('toast_success'), 'success'); }

async function processPageNumbersPdf() { let converted = 0; for (let i = 0; i < state.files.length; i++) { setFileStatus(i, 'processing'); const pdfDoc = await PDFLib.PDFDocument.load(await state.files[i].arrayBuffer()); const pages = pdfDoc.getPages(); for (let p = 0; p < pages.length; p++) { updateProgress(i, ((p + 1) / pages.length) * 80); const page = pages[p]; const { width } = page.getSize(); page.drawText(String(p + 1), { x: width / 2, y: 20, size: 12, color: PDFLib.rgb(0.1, 0.1, 0.1) }); } updateProgress(i, 90); downloadBlob(await pdfDoc.save(), state.files[i].name.replace('.pdf', '_numbered.pdf')); setFileStatus(i, 'completed'); updateProgress(i, 100); converted++; } showToast(t('toast_success'), 'success'); }

async function processPdfToJpg() {
    let totalConverted = 0;
    const generatedFiles = [];

    for (let i = 0; i < state.files.length; i++) {
        const file = state.files[i];
        setFileStatus(i, 'processing');
        updateProgress(i, 10);
        try {
            const arrayBuffer = await file.arrayBuffer();
            updateProgress(i, 30);
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;
            updateProgress(i, 50);
            const scale = state.settings.pdfDpi / 72;

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                await page.render({ canvasContext: ctx, viewport }).promise;
                const quality = state.settings.jpgQuality;
                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                canvas.width = 0;
                canvas.height = 0;

                const baseName = file.name.replace('.pdf', '');
                const imgName = numPages > 1 ? `${baseName}_page_${pageNum}.jpg` : `${baseName}.jpg`;
                generatedFiles.push({ name: imgName, data: dataUrl });
                updateProgress(i, 50 + ((pageNum / numPages) * 50));
            }
            await pdf.destroy();
            setFileStatus(i, 'completed');
            totalConverted += numPages;
        } catch (err) {
            setFileStatus(i, 'error');
            showToast(t('toast_error') + err.message, 'error');
        }
    }

    if (generatedFiles.length > 0) {
        const zipName = state.files.length === 1
            ? state.files[0].name.replace('.pdf', '_images.zip')
            : 'pdf_images.zip';
        await downloadFilesOrZip(generatedFiles, zipName);
    }
    showToast(t('toast_success'), 'success');
}

async function processJpgToPdf() { if (state.files.length === 0) return; setFileStatus(0, 'processing'); updateProgress(0, 10); try { const { jsPDF } = window.jspdf; let pdf = null; for (let i = 0; i < state.files.length; i++) { const file = state.files[i]; updateProgress(0, 10 + (i / state.files.length) * 70); const dataUrl = await readFileAsDataURL(file); const img = await loadImage(dataUrl); const orientation = img.width > img.height ? 'l' : 'p'; const format = [img.width, img.height]; if (i === 0) { pdf = new jsPDF({ orientation, unit: 'px', format }); pdf.addImage(dataUrl, getImageFormat(file.type), 0, 0, img.width, img.height); } else { pdf.addPage(format, orientation); pdf.addImage(dataUrl, getImageFormat(file.type), 0, 0, img.width, img.height); } } updateProgress(0, 90); if (state.settings.autoDownload) { pdf.save('document.pdf'); } updateProgress(0, 100); setFileStatus(0, 'completed'); showToast(t('toast_success'), 'success'); } catch (err) { setFileStatus(0, 'error'); showToast(t('toast_error') + err.message, 'error'); } }

async function processImgToWebp() { let converted = 0; for (let i = 0; i < state.files.length; i++) { const file = state.files[i]; setFileStatus(i, 'processing'); updateProgress(i, 20); try { const dataUrl = await readFileAsDataURL(file); updateProgress(i, 40); const img = await loadImage(dataUrl); updateProgress(i, 60); const canvas = document.createElement('canvas'); canvas.width = img.width; canvas.height = img.height; const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0); updateProgress(i, 80); const quality = state.settings.webpQuality; const webpData = canvas.toDataURL('image/webp', quality); canvas.width = 0; canvas.height = 0; if (state.settings.autoDownload) { const link = document.createElement('a'); link.href = webpData; const baseName = file.name.split('.').slice(0, -1).join('.'); link.download = baseName + '.webp'; link.click(); } updateProgress(i, 100); setFileStatus(i, 'completed'); converted++; } catch (err) { setFileStatus(i, 'error'); showToast(t('toast_error') + err.message, 'error'); } } showToast(t('toast_success'), 'success'); }

function readFileAsDataURL(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = e => resolve(e.target.result); reader.onerror = reject; reader.readAsDataURL(file); }); }
function loadImage(src) { return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = reject; img.src = src; }); }
function getImageFormat(mimeType) { if (mimeType.includes('png')) return 'PNG'; if (mimeType.includes('webp')) return 'WEBP'; if (mimeType.includes('gif')) return 'GIF'; return 'JPEG'; }

els.qrSize.addEventListener('input', () => { els.qrSizeValue.textContent = els.qrSize.value + 'px'; }); 
els.qrColorDark.addEventListener('input', () => { els.qrColorDark.nextElementSibling.textContent = els.qrColorDark.value; }); 
els.qrColorLight.addEventListener('input', () => { els.qrColorLight.nextElementSibling.textContent = els.qrColorLight.value; });

// ==================== QR CODE STUDIO MODULE ====================
let qrType = 'text';

function switchQrTab(type) {
    qrType = type;
    const textSec = document.getElementById('qrTextSection');
    const phoneSec = document.getElementById('qrPhoneSection');
    const cardSec = document.getElementById('qrCardSection');

    if (textSec) textSec.style.display = (type === 'text') ? 'block' : 'none';
    if (phoneSec) phoneSec.style.display = (type === 'phone') ? 'block' : 'none';
    if (cardSec) cardSec.style.display = (type === 'card') ? 'block' : 'none';

    const btnText = document.getElementById('qrTabText');
    const btnPhone = document.getElementById('qrTabPhone');
    const btnCard = document.getElementById('qrTabCard');

    btnText?.classList.replace(type === 'text' ? 'btn-outline' : 'btn-primary', type === 'text' ? 'btn-primary' : 'btn-outline');
    btnPhone?.classList.replace(type === 'phone' ? 'btn-outline' : 'btn-primary', type === 'phone' ? 'btn-primary' : 'btn-outline');
    btnCard?.classList.replace(type === 'card' ? 'btn-outline' : 'btn-primary', type === 'card' ? 'btn-primary' : 'btn-outline');
}

document.getElementById('qrTabText')?.addEventListener('click', () => switchQrTab('text'));
document.getElementById('qrTabPhone')?.addEventListener('click', () => switchQrTab('phone'));
document.getElementById('qrTabCard')?.addEventListener('click', () => switchQrTab('card'));

// Живе маскування картки по 4 цифри (XXXX XXXX XXXX XXXX)
document.getElementById('qrCardInput')?.addEventListener('input', (e) => {
    let raw = e.target.value.replace(/\D/g, '').substring(0, 19);
    let formatted = raw.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formatted;

    const warningEl = document.getElementById('qrCardWarning');
    if (warningEl) warningEl.style.display = 'none';
});

/**
 * Валідація контрольної суми за алгоритмом Луна
 */
function validateLuhn(cardNumber) {
    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10) === 0;
}

/**
 * Очищує та валідує введений телефонний номер для QR-Payload
 */
function sanitizePhoneNumber(rawInput, countryPrefix = '') {
    let cleaned = rawInput.trim().replace(/^tel:/i, '').trim();

    if (countryPrefix && !cleaned.startsWith('+')) {
        cleaned = countryPrefix + cleaned.replace(/^0+/, '');
    }

    const hasPlus = cleaned.startsWith('+');
    const digitsOnly = cleaned.replace(/\D/g, '');

    const finalNumber = hasPlus ? `+${digitsOnly}` : digitsOnly;
    return {
        payload: `tel:${finalNumber}`,
        digitsCount: digitsOnly.length
    };
}

let currentQRCode = null; 
els.generateQrBtn.addEventListener('click', () => {
    let payload = '';
    const cardHintEl = document.getElementById('qrCardHint');
    if (cardHintEl) cardHintEl.style.display = 'none';

    if (qrType === 'text') {
        payload = els.qrInputData.value.trim();
        if (!payload) return;
    } else if (qrType === 'phone') {
        const rawPhone = document.getElementById('qrPhoneInput')?.value || '';
        const countryPrefix = document.getElementById('qrCountryCode')?.value || '';

        const { payload: phonePayload, digitsCount } = sanitizePhoneNumber(rawPhone, countryPrefix);

        if (digitsCount < 7 || digitsCount > 15) {
            showToast(t('toast_qr_phone_invalid'), 'warning');
            return;
        }

        payload = phonePayload;
    } else if (qrType === 'card') {
        const rawCard = document.getElementById('qrCardInput')?.value || '';
        const cleanedCard = rawCard.replace(/\D/g, '');

        if (cleanedCard.length < 13 || cleanedCard.length > 19) {
            showToast(t('toast_qr_card_invalid'), 'warning');
            return;
        }

        // Перевірка алгоритмом Луна
        const isLuhnValid = validateLuhn(cleanedCard);
        if (!isLuhnValid) {
            showToast(t('toast_qr_card_luhn_warning'), 'warning');
            const warningEl = document.getElementById('qrCardWarning');
            if (warningEl) {
                warningEl.textContent = t('toast_qr_card_luhn_warning');
                warningEl.style.display = 'block';
            }
        }

        payload = cleanedCard;
        if (cardHintEl) cardHintEl.style.display = 'block';
    }

    els.qrPreviewBox.innerHTML = '';
    const levelMap = { 
        1: QRCode.CorrectLevel.L, 
        0: QRCode.CorrectLevel.M, 
        3: QRCode.CorrectLevel.Q, 
        2: QRCode.CorrectLevel.H 
    };

    currentQRCode = new QRCode(els.qrPreviewBox, { 
        text: payload, 
        width: parseInt(els.qrSize.value), 
        height: parseInt(els.qrSize.value), 
        colorDark: els.qrColorDark.value, 
        colorLight: els.qrColorLight.value, 
        correctLevel: levelMap[parseInt(els.qrErrorLevel.value)] || QRCode.CorrectLevel.H 
    });

    els.qrActions.style.display = 'flex';
});

initTheme(); 
loadSettings(); 
updateLanguageUI();
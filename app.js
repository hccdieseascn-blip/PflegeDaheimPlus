/* =========================================================
   PFLEGE DAHEIM+
   APP.JS
========================================================= */


/* =========================================================
   LANGUAGE / TRANSLATION
========================================================= */

const translations = {

    /* =====================================================
       DEUTSCH
    ===================================================== */

    de: {

        /* Sidebar */
        dashboard: "Dashboard",
        healthMonitor: "Gesundheitsmonitor",
        medications: "Medikamente",
        fallPrevention: "Sturzprävention",
        carePlan: "Pflegeplan",
        telemedicine: "Telemedizin",
        careReports: "Pflegeberichte",
        messages: "Nachrichten",
        settings: "Einstellungen",
        emergency: "NOTFALL / SOS",

        /* General */
        welcome: "Willkommen zurück",
        goodMorning: "GUTEN MORGEN",
        enterVitals: "+ Vitalzeichen eingeben",

        welcomeDescription:
            "Hier sehen Sie Ihren aktuellen Gesundheitsstatus und die wichtigsten Aufgaben für heute.",

        healthStatusToday: "Gesundheitsstatus heute",
        updatedRecently: "Aktualisiert vor wenigen Minuten",

        bloodPressure: "Blutdruck",
        stable: "Stabil",
        drink: "Trinken",
        health: "GESUNDHEIT",

        bloodPressureTrend: "Blutdruckverlauf",
        days7: "7 Tage",
        days30: "30 Tage",
        today: "Heute",
        todayLabel: "HEUTE",

        dailyPlan: "Tagesplan",
        showAll: "Alle anzeigen",

        medicationsShort: "Medikamente",
        homeVisit: "Hausbesuch",
        checkVitals: "Vitalzeichen kontrollieren",

        movement: "Bewegung",
        walkWithFamily: "Spaziergang mit Angehörigen",

        hydration: "Trinkmenge",
        checkFluidBalance: "Flüssigkeitsbilanz prüfen",

        quickAccess: "Schnellzugriff",
        vitalSigns: "Vitalzeichen",
        bloodPressureValues: "Blutdruck & Werte",
        takenToday: "Heute 2/3 genommen",
        checkRisk: "Risiko überprüfen",
        nextAppointment: "Nächster Termin 07.10.",

        lastCareActivities: "Letzte Pflegeaktivitäten",
        allReports: "Alle Berichte",
        vitalsChecked: "Vitalzeichen kontrolliert",
        medicationConfirmed: "Medikamenteneinnahme bestätigt",
        hydrationUpdated: "Trinkmenge aktualisiert",

        dailyGoals: "Tagesziele",
        fluid: "Flüssigkeit",
        movementGoal: "Bewegung",

        /* Health */
        monitoring: "MONITORING",
        newMeasurement: "+ Neue Messung",
        recordAndDetect:
            "Vitalzeichen erfassen und Veränderungen frühzeitig erkennen.",
        measurementHistory: "Messverlauf",
        export: "Exportieren",
        date: "Datum",
        evaluationStatus: "Bewertung",

        newVitals: "Neue Vitalzeichen",
        vitalsDescription:
            "Die neuen Werte werden direkt mit dem Dashboard verbunden.",

        systolicBP: "Systolischer Blutdruck",
        diastolicBP: "Diastolischer Blutdruck",
        pulse: "Puls",
        oxygen: "SpO₂",
        saveMeasurement: "Messung speichern",

        normal: "Normal",
        observation: "Beobachtung",
        highBloodPressure: "Erhöhter Blutdruck erkannt",
        informCareTeam: "Pflegeteam informieren",

        /* Medication */
        therapy: "THERAPIE",
        medicationPlan: "Medikationsplan",
        medicationOverview:
            "Medikamente und Einnahmen im Überblick.",

        addMedication: "Medikament hinzufügen",
        medication: "Medikament",
        dosage: "Dosierung",
        administrationTime: "Einnahmezeit",
        saveMedication: "Medikament speichern",
        open: "Offen",
        taken: "Eingenommen",
        confirmMedication: "Einnahme bestätigen",

        /* Fall */
        prevention: "PRÄVENTION",
        fallRiskCheck: "Sturzrisiko-Check",
        balanceProblems: "Gleichgewichtsstörungen",
        unsafeWalking: "Unsicheres Gehen",
        visualImpairment: "Sehbeeinträchtigung",
        dizzinessMedication: "Medikamente mit Schwindelrisiko",
        recentFall: "Sturz in den letzten 12 Monaten",
        bathroomUncertainty: "Unsicherheit im Badezimmer",

        result: "ERGEBNIS",

        lowRisk: "Niedriges Risiko",
        mediumRisk: "Mittleres Risiko",
        highRisk: "Hohes Risiko",

        riskDescription:
            "Es bestehen mehrere Risikofaktoren. Präventive Maßnahmen werden empfohlen.",

        recommendation:
            "Gute Beleuchtung, rutschfeste Schuhe, Haltegriffe und freie Wege nutzen.",

        homeSafety: "Wohnungssicherheits-Check",
        checked: "4/5 geprüft",

        bedroom: "Schlafzimmer",
        bathroom: "Badezimmer",
        kitchen: "Küche",
        livingRoom: "Wohnzimmer",
        entrance: "Eingang",

        safe: "Sicher",
        check: "Überprüfen",

        /* Care Plan */
        organization: "ORGANISATION",
        allTasksToday:
            "Alle Aufgaben und Termine für heute.",

        newCareTask: "Neue Pflegeaufgabe",
        time: "Uhrzeit",
        task: "Aufgabe",
        responsible: "Zuständig",

        patient: "Patient",
        family: "Angehörige",
        nurse: "Pflegefachperson",

        addTask: "Aufgabe hinzufügen",
        markComplete: "Als erledigt markieren",
        completed: "Erledigt",

        medicationType: "MEDIKATION",
        careType: "PFLEGE",
        movementType: "BEWEGUNG",
        monitoringType: "MONITORING",

        care: "PFLEGE",
        medicationIntake: "Medikamenteneinnahme bestätigen",
        generalCondition:
            "Vitalzeichen und Allgemeinzustand kontrollieren",
        movementPromotion:
            "Bewegungsförderung mit Angehörigen",
        checkAndDocument:
            "Trinkmenge überprüfen und dokumentieren",

        /* Telemedicine */
        digitalHealth: "DIGITAL HEALTH",
        virtualCare:
            "Virtuelle Betreuung zwischen Patient, Pflegefachperson und Angehörigen.",

        startConversation: "📹 Gespräch starten",
        readyForAppointment: "Bereit für den Termin",

        nextAppointmentLabel: "NÄCHSTER TERMIN",
        preparation: "Vorbereitung",

        vitalsUpdated: "Vitalzeichen aktualisiert",
        medicationListReady: "Medikamentenliste bereit",
        questionsNoted: "Fragen notiert",
        symptomsDocumented: "Beschwerden dokumentiert",

        /* Reports */
        documentation: "DOKUMENTATION",
        progressAndMeasures:
            "Verlauf und durchgeführte Maßnahmen.",

        createReport: "+ Bericht erstellen",
        createReportTitle: "Pflegebericht erstellen",

        category: "Kategorie",
        observationLabel: "BEOBACHTUNG",
        measureLabel: "MASSNAHME",
        adviceLabel: "BERATUNG",

        observation: "Beobachtung",
        measure: "Maßnahme",
        evaluation: "Evaluation",
        counseling: "Beratung",

        report: "Bericht",
        saveReport: "Bericht speichern",

        /* Messages */
        communication: "KOMMUNIKATION",
        directCommunication:
            "Direkte Kommunikation mit dem Pflegeteam.",
        online: "● Online",
        messageSent: "Nachricht gesendet.",
        messagePlaceholder: "Nachricht schreiben...",
        now: "Jetzt",

        /* Profile */
        profile: "PROFIL",
        personalData: "Persönliche Daten",
        name: "Name",
        age: "Alter",
        phone: "Telefon",
        saveChanges: "Änderungen speichern",

        /* Accessibility */
        accessibility: "Barrierefreiheit",
        largeText: "Große Schrift",
        betterReadability: "Bessere Lesbarkeit",
        notificationsSetting: "Benachrichtigungen",
        healthWarnings: "Gesundheitswarnungen",
        highContrast: "Hoher Kontrast",
        betterVisibility: "Verbesserte Sichtbarkeit",

        /* Notifications */
        notifications: "Benachrichtigungen",

        /* SOS */
        emergencyQuestion: "Notfall auslösen?",
        confirmSOS: "SOS bestätigen",

        emergencyInfo:
            "In einem echten System würde das Pflegeteam und der hinterlegte Notfallkontakt benachrichtigt.",

        realEmergency:
            "Bei einem echten medizinischen Notfall:",

        simulatedEmergency:
            "🆘 Notfallmeldung wurde simuliert.",

        /* Examples / placeholders */
        exampleRamipril: "z.B. Ramipril",
        exampleDose: "z.B. 5 mg",
        exampleBP: "z.B. Blutdruck kontrollieren",

        /* Toasts */
        vitalsSaved: "Vitalzeichen gespeichert.",

        careTeamInformed:
            "✓ Pflegeteam wurde über den Blutdruck informiert.",

        allFieldsRequired:
            "Bitte alle Felder ausfüllen.",

        medicationAdded:
            "Medikament hinzugefügt.",

        intakeDocumented:
            "Einnahme dokumentiert.",

        taskCompleted:
            "Aufgabe wurde abgeschlossen.",

        taskTimeRequired:
            "Bitte Aufgabe und Uhrzeit eingeben.",

        newTaskAdded:
            "Neue Aufgabe hinzugefügt.",

        videoPreparing:
            "Videogespräch wird vorbereitet...",

        videoConnected:
            "Pflegefachperson Aghnia ist verbunden.",

        reportRequired:
            "Bitte einen Bericht eingeben.",

        reportSaved:
            "Pflegebericht gespeichert.",

        profileNameRequired:
            "Bitte einen Namen eingeben.",

        profileSaved:
            "Profil gespeichert.",

        largeTextEnabled:
            "Große Schrift aktiviert.",

        largeTextDisabled:
            "Große Schrift deaktiviert."
    },


    /* =====================================================
       INDONESIAN
    ===================================================== */

    id: {

        /* Sidebar */
        dashboard: "Dashboard",
        healthMonitor: "Monitor Kesehatan",
        medications: "Obat",
        fallPrevention: "Pencegahan Jatuh",
        carePlan: "Rencana Perawatan",
        telemedicine: "Telemedisin",
        careReports: "Catatan Keperawatan",
        messages: "Pesan",
        settings: "Pengaturan",
        emergency: "DARURAT / SOS",

        /* General */
        welcome: "Selamat datang kembali",
        goodMorning: "SELAMAT PAGI",
        enterVitals: "+ Masukkan tanda vital",

        welcomeDescription:
            "Di sini Anda dapat melihat kondisi kesehatan terkini dan tugas penting hari ini.",

        healthStatusToday: "Status kesehatan hari ini",
        updatedRecently: "Diperbarui beberapa menit yang lalu",

        bloodPressure: "Tekanan darah",
        stable: "Stabil",
        drink: "Minum",
        health: "KESEHATAN",

        bloodPressureTrend: "Tren tekanan darah",
        days7: "7 hari",
        days30: "30 hari",
        today: "Hari ini",
        todayLabel: "HARI INI",

        dailyPlan: "Rencana hari ini",
        showAll: "Lihat semua",

        medicationsShort: "Obat",
        homeVisit: "Kunjungan rumah",
        checkVitals: "Periksa tanda vital",

        movement: "Aktivitas",
        walkWithFamily: "Berjalan bersama keluarga",

        hydration: "Asupan cairan",
        checkFluidBalance: "Periksa keseimbangan cairan",

        quickAccess: "Akses cepat",
        vitalSigns: "Tanda vital",
        bloodPressureValues: "Tekanan darah & nilai",
        takenToday: "Hari ini 2/3 sudah diminum",
        checkRisk: "Periksa risiko",
        nextAppointment: "Janji berikutnya 07.10.",

        lastCareActivities: "Aktivitas perawatan terakhir",
        allReports: "Semua catatan",
        vitalsChecked: "Tanda vital diperiksa",
        medicationConfirmed: "Konsumsi obat dikonfirmasi",
        hydrationUpdated: "Asupan cairan diperbarui",

        dailyGoals: "Target harian",
        fluid: "Cairan",
        movementGoal: "Aktivitas",

        /* Health */
        monitoring: "PEMANTAUAN",
        newMeasurement: "+ Pengukuran baru",

        recordAndDetect:
            "Catat tanda vital dan kenali perubahan sejak dini.",

        measurementHistory: "Riwayat pengukuran",
        export: "Ekspor",
        date: "Tanggal",
        evaluationStatus: "Penilaian",

        newVitals: "Tanda Vital Baru",

        vitalsDescription:
            "Nilai baru akan langsung terhubung dengan dashboard.",

        systolicBP: "Tekanan darah sistolik",
        diastolicBP: "Tekanan darah diastolik",
        pulse: "Nadi",
        oxygen: "SpO₂",
        saveMeasurement: "Simpan pengukuran",

        normal: "Normal",
        observation: "Observasi",
        highBloodPressure:
            "Tekanan darah tinggi terdeteksi",
        informCareTeam:
            "Informasikan tim perawatan",

        /* Medication */
        therapy: "TERAPI",
        medicationPlan: "Rencana obat",
        medicationOverview:
            "Ringkasan obat dan waktu konsumsinya.",

        addMedication: "Tambah obat",
        medication: "Obat",
        dosage: "Dosis",
        administrationTime: "Waktu minum",
        saveMedication: "Simpan obat",

        open: "Belum diminum",
        taken: "Sudah diminum",
        confirmMedication: "Konfirmasi konsumsi",

        /* Fall */
        prevention: "PENCEGAHAN",
        fallRiskCheck: "Pemeriksaan risiko jatuh",
        balanceProblems: "Gangguan keseimbangan",
        unsafeWalking: "Berjalan tidak stabil",
        visualImpairment: "Gangguan penglihatan",
        dizzinessMedication:
            "Obat dengan risiko pusing",
        recentFall:
            "Jatuh dalam 12 bulan terakhir",
        bathroomUncertainty:
            "Ketidakamanan di kamar mandi",

        result: "HASIL",

        lowRisk: "Risiko rendah",
        mediumRisk: "Risiko sedang",
        highRisk: "Risiko tinggi",

        riskDescription:
            "Terdapat beberapa faktor risiko. Tindakan pencegahan disarankan.",

        recommendation:
            "Gunakan pencahayaan yang baik, alas kaki antiselip, pegangan, dan jalur yang bebas.",

        homeSafety:
            "Pemeriksaan keamanan rumah",

        checked: "4/5 diperiksa",

        bedroom: "Kamar tidur",
        bathroom: "Kamar mandi",
        kitchen: "Dapur",
        livingRoom: "Ruang tamu",
        entrance: "Pintu masuk",

        safe: "Aman",
        check: "Periksa",

        /* Care Plan */
        organization: "ORGANISASI",
        allTasksToday:
            "Semua tugas dan jadwal hari ini.",

        newCareTask: "Tugas perawatan baru",
        time: "Waktu",
        task: "Tugas",
        responsible: "Penanggung jawab",

        patient: "Pasien",
        family: "Keluarga",
        nurse: "Perawat",

        addTask: "Tambah tugas",
        markComplete: "Tandai selesai",
        completed: "Selesai",

        medicationType: "OBAT",
        careType: "PERAWATAN",
        movementType: "AKTIVITAS",
        monitoringType: "PEMANTAUAN",

        care: "PERAWATAN",
        medicationIntake:
            "Konfirmasi konsumsi obat",
        generalCondition:
            "Periksa tanda vital dan kondisi umum",
        movementPromotion:
            "Aktivitas bersama keluarga",
        checkAndDocument:
            "Periksa dan dokumentasikan asupan cairan",

        /* Telemedicine */
        digitalHealth: "KESEHATAN DIGITAL",

        virtualCare:
            "Layanan virtual antara pasien, perawat, dan keluarga.",

        startConversation: "📹 Mulai percakapan",
        readyForAppointment:
            "Siap untuk jadwal konsultasi",

        nextAppointmentLabel:
            "JADWAL BERIKUTNYA",

        preparation: "Persiapan",

        vitalsUpdated:
            "Tanda vital diperbarui",

        medicationListReady:
            "Daftar obat siap",

        questionsNoted:
            "Pertanyaan sudah dicatat",

        symptomsDocumented:
            "Keluhan sudah didokumentasikan",

        /* Reports */
        documentation: "DOKUMENTASI",

        progressAndMeasures:
            "Perkembangan dan tindakan yang dilakukan.",

        createReport: "+ Buat catatan",
        createReportTitle:
            "Buat catatan keperawatan",

        category: "Kategori",
        observationLabel: "OBSERVASI",
        measureLabel: "TINDAKAN",
        adviceLabel: "EDUKASI",

        observation: "Observasi",
        measure: "Tindakan",
        evaluation: "Evaluasi",
        counseling: "Edukasi",

        report: "Catatan",
        saveReport: "Simpan catatan",

        /* Messages */
        communication: "KOMUNIKASI",

        directCommunication:
            "Komunikasi langsung dengan tim perawatan.",

        online: "● Online",
        messageSent: "Pesan terkirim.",
        messagePlaceholder: "Tulis pesan...",
        now: "Sekarang",

        /* Profile */
        profile: "PROFIL",
        personalData: "Data pribadi",
        name: "Nama",
        age: "Usia",
        phone: "Telepon",
        saveChanges: "Simpan perubahan",

        /* Accessibility */
        accessibility: "Aksesibilitas",
        largeText: "Tulisan besar",
        betterReadability: "Lebih mudah dibaca",
        notificationsSetting: "Notifikasi",
        healthWarnings: "Peringatan kesehatan",
        highContrast: "Kontras tinggi",
        betterVisibility: "Visibilitas lebih baik",

        /* Notifications */
        notifications: "Notifikasi",

        /* SOS */
        emergencyQuestion:
            "Aktifkan keadaan darurat?",

        confirmSOS: "Konfirmasi SOS",

        emergencyInfo:
            "Dalam sistem nyata, tim perawatan dan kontak darurat yang terdaftar akan diberi tahu.",

        realEmergency:
            "Dalam keadaan darurat medis yang sebenarnya:",

        simulatedEmergency:
            "🆘 Notifikasi keadaan darurat telah disimulasikan.",

        /* Examples */
        exampleRamipril: "mis. Ramipril",
        exampleDose: "mis. 5 mg",
        exampleBP:
            "mis. periksa tekanan darah",

        /* Toasts */
        vitalsSaved:
            "Tanda vital tersimpan.",

        careTeamInformed:
            "✓ Tim perawatan telah diberi informasi tentang tekanan darah.",

        allFieldsRequired:
            "Harap isi semua kolom.",

        medicationAdded:
            "Obat berhasil ditambahkan.",

        intakeDocumented:
            "Konsumsi obat didokumentasikan.",

        taskCompleted:
            "Tugas telah diselesaikan.",

        taskTimeRequired:
            "Harap masukkan tugas dan waktu.",

        newTaskAdded:
            "Tugas baru berhasil ditambahkan.",

        videoPreparing:
            "Video konsultasi sedang disiapkan...",

        videoConnected:
            "Perawat Aghnia telah terhubung.",

        reportRequired:
            "Harap masukkan catatan.",

        reportSaved:
            "Catatan keperawatan tersimpan.",

        profileNameRequired:
            "Harap masukkan nama.",

        profileSaved:
            "Profil tersimpan.",

        largeTextEnabled:
            "Ukuran tulisan besar diaktifkan.",

        largeTextDisabled:
            "Ukuran tulisan besar dinonaktifkan."
    }
};


/* =========================================================
   APP STATE
========================================================= */

let currentLanguage =
    localStorage.getItem("pflegeDaheimLanguage") || "de";

let currentBP = 138;
let currentDia = 82;
let currentPulse = 74;
let currentSpO2 = 97;


/* =========================================================
   TRANSLATION HELPER
========================================================= */

function t(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.de[key] ||
        key
    );
}


/* =========================================================
   NAVIGATION
========================================================= */

function showPage(pageId, button = null) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const page =
        document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    document.querySelectorAll(".nav").forEach(nav => {
        nav.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    updatePageTitle();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   DATE
========================================================= */

function updateDate() {

    const date = new Date();

    const element =
        document.getElementById("currentDate");

    if (!element) return;

    element.textContent =
        date.toLocaleDateString(
            currentLanguage === "id"
                ? "id-ID"
                : "de-DE",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );
}


/* =========================================================
   VITAL MODAL
========================================================= */

function openVitalModal() {

    document.getElementById("modalContent").innerHTML = `

        <h2>${t("newVitals")}</h2>

        <p style="color:#81908b;font-size:12px">
            ${t("vitalsDescription")}
        </p>

        <label>
            ${t("systolicBP")}
            <input
                id="inputSys"
                type="number"
                value="${currentBP}"
            >
        </label>

        <label>
            ${t("diastolicBP")}
            <input
                id="inputDia"
                type="number"
                value="${currentDia}"
            >
        </label>

        <label>
            ${t("pulse")}
            <input
                id="inputPulse"
                type="number"
                value="${currentPulse}"
            >
        </label>

        <label>
            ${t("oxygen")}
            <input
                id="inputSpO2"
                type="number"
                value="${currentSpO2}"
            >
        </label>

        <button
            class="primary-btn"
            onclick="saveVitalSigns()"
        >
            ${t("saveMeasurement")}
        </button>
    `;

    openModal();
}


function saveVitalSigns() {

    currentBP =
        Number(document.getElementById("inputSys").value);

    currentDia =
        Number(document.getElementById("inputDia").value);

    currentPulse =
        Number(document.getElementById("inputPulse").value);

    currentSpO2 =
        Number(document.getElementById("inputSpO2").value);

    updateHealthUI();

    closeModal();

    toast(t("vitalsSaved"));

    const warning =
        document.getElementById("bpWarning");

    const notification =
        document.getElementById("notificationCount");

    if (currentBP >= 160 || currentDia >= 100) {

        if (warning) {
            warning.classList.remove("hidden");
        }

        if (notification) {
            notification.textContent = "3";
        }

    } else {

        if (warning) {
            warning.classList.add("hidden");
        }
    }
}


/* =========================================================
   UPDATE HEALTH UI
========================================================= */

function updateHealthUI() {

    const dashboardBP =
        document.getElementById("dashboardBP");

    const monitorBP =
        document.getElementById("monitorBP");

    const dashboardPulse =
        document.getElementById("dashboardPulse");

    const monitorPulse =
        document.getElementById("monitorPulse");

    const dashboardSpO2 =
        document.getElementById("dashboardSpO2");

    const monitorSpO2 =
        document.getElementById("monitorSpO2");

    if (dashboardBP) {
        dashboardBP.textContent =
            `${currentBP}/${currentDia}`;
    }

    if (monitorBP) {
        monitorBP.textContent =
            `${currentBP}/${currentDia}`;
    }

    if (dashboardPulse) {
        dashboardPulse.textContent =
            currentPulse;
    }

    if (monitorPulse) {
        monitorPulse.textContent =
            currentPulse;
    }

    if (dashboardSpO2) {
        dashboardSpO2.textContent =
            currentSpO2;
    }

    if (monitorSpO2) {
        monitorSpO2.textContent =
            currentSpO2;
    }

    const bpStatus =
        document.getElementById("bpStatus");

    if (!bpStatus) return;

    if (currentBP >= 160 || currentDia >= 100) {

        bpStatus.textContent =
            t("observation");

        bpStatus.style.color =
            "#d94d45";

    } else {

        bpStatus.textContent =
            t("normal");

        bpStatus.style.color =
            "#17765f";
    }
}


/* =========================================================
   NURSE ALERT
========================================================= */

function informNurse() {

    toast(t("careTeamInformed"));

    const notification =
        document.getElementById("notificationCount");

    if (notification) {
        notification.textContent = "3";
    }
}


/* =========================================================
   MEDICATION
========================================================= */

function openMedicationModal() {

    document.getElementById("modalContent").innerHTML = `

        <h2>${t("addMedication")}</h2>

        <label>
            ${t("medication")}

            <input
                id="medName"
                placeholder="${t("exampleRamipril")}"
            >
        </label>

        <label>
            ${t("dosage")}

            <input
                id="medDose"
                placeholder="${t("exampleDose")}"
            >
        </label>

        <label>
            ${t("administrationTime")}

            <input
                id="medTime"
                type="time"
            >
        </label>

        <button
            class="primary-btn"
            onclick="addMedication()"
        >
            ${t("saveMedication")}
        </button>
    `;

    openModal();
}


function addMedication() {

    const name =
        document.getElementById("medName").value.trim();

    const dose =
        document.getElementById("medDose").value.trim();

    const time =
        document.getElementById("medTime").value;

    if (!name || !dose || !time) {

        toast(t("allFieldsRequired"));

        return;
    }

    const container =
        document.getElementById("medicationList");

    if (!container) return;

    const card =
        document.createElement("div");

    card.className =
        "med-card pending";

    card.innerHTML = `

        <div class="med-top">

            <div class="med-icon">
                💊
            </div>

            <span class="pill orange">
                ${t("open")}
            </span>

        </div>

        <h3>${escapeHTML(name)}</h3>

        <p>
            ${escapeHTML(dose)} · 1 Tablette
        </p>

        <div class="med-time">
            🕐 ${time} Uhr
        </div>

        <button
            class="primary-btn"
            onclick="confirmMedication(this)"
        >
            ${t("confirmMedication")}
        </button>
    `;

    container.appendChild(card);

    closeModal();

    toast(t("medicationAdded"));
}


function confirmMedication(button) {

    button.textContent =
        `✓ ${t("taken")}`;

    button.classList.remove(
        "primary-btn"
    );

    button.classList.add(
        "secondary-btn"
    );

    button.disabled = true;

    const pill =
        button.parentElement.querySelector(".pill");

    if (pill) {

        pill.textContent =
            t("taken");

        pill.classList.remove(
            "orange"
        );

        pill.classList.add(
            "green"
        );
    }

    toast(t("intakeDocumented"));
}


/* =========================================================
   FALL RISK
========================================================= */

function calculateRisk() {

    const checks =
        document.querySelectorAll(
            '#sturz input[type="checkbox"]'
        );

    let score = 0;

    checks.forEach(check => {

        if (check.checked) {
            score++;
        }
    });

    const level =
        document.getElementById("riskLevel");

    const text =
        document.getElementById("riskText");

    if (!level || !text) return;

    if (score <= 1) {

        level.textContent =
            t("lowRisk");

        level.style.color =
            "#17765f";

        text.textContent =
            currentLanguage === "id"
                ? "Saat ini hanya terdapat sedikit faktor risiko."
                : "Aktuell bestehen nur wenige Risikofaktoren.";

    } else if (score <= 3) {

        level.textContent =
            t("mediumRisk");

        level.style.color =
            "#d58a32";

        text.textContent =
            t("riskDescription");

    } else {

        level.textContent =
            t("highRisk");

        level.style.color =
            "#d94d45";

        text.textContent =
            currentLanguage === "id"
                ? "Beberapa faktor risiko telah ditemukan. Penilaian keperawatan disarankan."
                : "Mehrere Risikofaktoren wurden erkannt. Eine pflegerische Beurteilung wird empfohlen.";
    }
}


/* =========================================================
   TASK
========================================================= */

function completeTask(button) {

    button.textContent =
        `✓ ${t("completed")}`;

    button.style.background =
        "#e8f4f0";

    button.style.borderColor =
        "#cce4dc";

    button.disabled = true;

    const item =
        button.closest(".plan-item");

    if (item) {
        item.classList.add("completed");
    }

    toast(t("taskCompleted"));
}


function addTask() {

    document.getElementById("modalContent").innerHTML = `

        <h2>${t("newCareTask")}</h2>

        <label>
            ${t("time")}

            <input
                id="taskTime"
                type="time"
            >
        </label>

        <label>
            ${t("task")}

            <input
                id="taskName"
                placeholder="${t("exampleBP")}"
            >
        </label>

        <label>
            ${t("responsible")}

            <select id="taskPerson">

                <option value="patient">
                    ${t("patient")}
                </option>

                <option value="family">
                    ${t("family")}
                </option>

                <option value="nurse">
                    ${t("nurse")}
                </option>

            </select>
        </label>

        <button
            class="primary-btn"
            onclick="saveTask()"
        >
            ${t("addTask")}
        </button>
    `;

    openModal();
}


function saveTask() {

    const time =
        document.getElementById("taskTime").value;

    const name =
        document.getElementById("taskName").value.trim();

    const person =
        document.getElementById("taskPerson").value;

    if (!time || !name) {

        toast(t("taskTimeRequired"));

        return;
    }

    const list =
        document.querySelector(".plan-list");

    if (!list) return;

    const personText = {

        patient: t("patient"),
        family: t("family"),
        nurse: t("nurse")

    }[person];

    const item =
        document.createElement("div");

    item.className =
        "plan-item";

    item.innerHTML = `

        <div class="plan-time">
            ${time}
        </div>

        <div class="plan-content">

            <span class="task-type">
                ${t("careType")}
            </span>

            <h3>
                ${escapeHTML(name)}
            </h3>

            <p>
                ${t("responsible")}: ${personText}
            </p>

        </div>

        <button
            onclick="completeTask(this)"
        >
            ${t("markComplete")}
        </button>
    `;

    list.appendChild(item);

    closeModal();

    toast(t("newTaskAdded"));
}


/* =========================================================
   TELEMEDICINE
========================================================= */

function startVideo() {

    toast(
        t("videoPreparing")
    );

    setTimeout(() => {

        toast(
            t("videoConnected")
        );

    }, 1200);
}


/* =========================================================
   REPORT
========================================================= */

function addReport() {

    document.getElementById("modalContent").innerHTML = `

        <h2>
            ${t("createReportTitle")}
        </h2>

        <label>
            ${t("category")}

            <select id="reportType">

                <option value="observation">
                    ${t("observation")}
                </option>

                <option value="measure">
                    ${t("measure")}
                </option>

                <option value="evaluation">
                    ${t("evaluation")}
                </option>

                <option value="counseling">
                    ${t("counseling")}
                </option>

            </select>

        </label>

        <label>
            ${t("report")}

            <textarea
                id="reportText"
                rows="5"
                placeholder="${currentLanguage === "id"
                    ? "Masukkan observasi atau tindakan..."
                    : "Beobachtung oder Maßnahme eingeben..."
                }"
            ></textarea>

        </label>

        <button
            class="primary-btn"
            onclick="saveReport()"
        >
            ${t("saveReport")}
        </button>
    `;

    openModal();
}


function saveReport() {

    const type =
        document.getElementById("reportType").value;

    const text =
        document.getElementById("reportText").value.trim();

    if (!text) {

        toast(t("reportRequired"));

        return;
    }

    const reports =
        document.querySelector(".reports");

    if (!reports) return;

    const report =
        document.createElement("div");

    report.className =
        "report";

    const now =
        new Date();

    const locale =
        currentLanguage === "id"
            ? "id-ID"
            : "de-DE";

    const date =
        now.toLocaleDateString(locale);

    const time =
        now.toLocaleTimeString(
            locale,
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    const typeText = {

        observation: t("observation"),
        measure: t("measure"),
        evaluation: t("evaluation"),
        counseling: t("counseling")

    }[type];

    report.innerHTML = `

        <div class="report-time">

            ${date}

            <small>
                ${time}
            </small>

        </div>

        <div class="report-dot"></div>

        <div>

            <span class="pill green">
                ${typeText.toUpperCase()}
            </span>

            <h3>
                ${currentLanguage === "id"
                    ? "Catatan keperawatan baru"
                    : "Neuer Pflegeeintrag"
                }
            </h3>

            <p>
                ${escapeHTML(text)}
            </p>

            <small>
                Pflegefachperson Revita
            </small>

        </div>
    `;

    reports.prepend(report);

    closeModal();

    toast(t("reportSaved"));
}


/* =========================================================
   CHAT
========================================================= */

/* =========================================================
   CHAT — INTERACTIVE REPLY
========================================================= */

function sendMessage() {

    const input = document.getElementById("messageInput");

    if (!input) return;

    const text = input.value.trim();

    if (!text) return;

    const messages = document.getElementById("messages");

    if (!messages) return;


    /* =========================
       PESAN PASIEN
    ========================= */

    const message = document.createElement("div");

    message.className = "message sent";

    message.innerHTML = `
        <p>${escapeHTML(text)}</p>
        <small>${t("now")}</small>
    `;

    messages.appendChild(message);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

    toast(t("messageSent"));


    /* =========================
       INDIKATOR MENGETIK
    ========================= */

    const typing = document.createElement("div");

    typing.className = "message received typing-message";

    typing.innerHTML = `
        <p>
            Pflegefachperson schreibt
            <span class="typing-dots">...</span>
        </p>
    `;

    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;


    /* =========================
       BALASAN OTOMATIS
    ========================= */

    setTimeout(() => {

        typing.remove();

        const reply = getNurseReply(text);

        const nurseMessage =
            document.createElement("div");

        nurseMessage.className = "message received";

        nurseMessage.innerHTML = `
            <p>${reply}</p>
            <small>${getCurrentChatTime()}</small>
        `;

        messages.appendChild(nurseMessage);

        messages.scrollTop = messages.scrollHeight;

        toast("Pflegefachperson hat geantwortet.");

    }, 1500);
}


/* =========================================================
   NURSE RESPONSE
========================================================= */

function getNurseReply(text) {

    const message = text.toLowerCase();


    /* Blutdruck */

    if (
        message.includes("blutdruck") ||
        message.includes("druck") ||
        message.includes("138/82")
    ) {

        return `
            Danke für die Rückmeldung.
            Ein Blutdruck von 138/82 mmHg ist aktuell
            unauffällig. Bitte messen Sie weiterhin regelmäßig
            und informieren Sie uns, wenn sich Ihre Werte
            deutlich verändern.
        `;
    }


    /* Medikamente */

    if (
        message.includes("medikament") ||
        message.includes("tablette") ||
        message.includes("ramipril") ||
        message.includes("metformin")
    ) {

        return `
            Danke für die Information.
            Bitte nehmen Sie Ihre Medikamente weiterhin
            entsprechend dem vereinbarten Einnahmeplan ein.
            Wenn Sie Nebenwirkungen bemerken, geben Sie uns
            bitte Bescheid.
        `;
    }


    /* Sturz */

    if (
        message.includes("sturz") ||
        message.includes("gefallen") ||
        message.includes("schwindel")
    ) {

        return `
            Bitte bleiben Sie zunächst sitzen und stehen Sie
            langsam auf. Wenn Ihnen weiterhin schwindelig ist
            oder Sie gestürzt sind, informieren Sie uns bitte
            sofort.
        `;
    }


    /* Schmerz */

    if (
        message.includes("schmerz") ||
        message.includes("weh") ||
        message.includes("schmerzen")
    ) {

        return `
            Das tut mir leid zu hören.
            Bitte teilen Sie uns mit, wo die Schmerzen sind,
            wie stark sie sind und seit wann sie bestehen.
            Dann können wir die Situation besser einschätzen.
        `;
    }


    /* Atembeschwerden */

    if (
        message.includes("atem") ||
        message.includes("luft") ||
        message.includes("atemnot") ||
        message.includes("schwer atmen")
    ) {

        return `
            Wenn Sie aktuell Atemnot haben, setzen Sie sich
            bitte aufrecht hin und vermeiden Sie körperliche
            Belastung. Bei starker oder zunehmender Atemnot
            bitte sofort Hilfe holen.
        `;
    }


    /* Allgemeines Wohlbefinden */

    if (
        message.includes("gut") ||
        message.includes("okay") ||
        message.includes("ok")
    ) {

        return `
            Das freut mich zu hören.
            Wenn sich Ihr Gesundheitszustand verändert oder
            Sie Fragen haben, können Sie uns jederzeit
            schreiben.
        `;
    }


    /* Termin */

    if (
        message.includes("termin") ||
        message.includes("besuch") ||
        message.includes("wann")
    ) {

        return `
            Ich schaue gerne nach Ihrem nächsten Termin.
            Bitte bleiben Sie erreichbar, falls wir Sie
            kurzfristig kontaktieren müssen.
        `;
    }


    /* =========================
       DEFAULT RESPONSE
    ========================= */

    return `
        Vielen Dank für Ihre Nachricht.
        Wir haben Ihre Information erhalten.
        Wenn es um Beschwerden oder eine Veränderung
        Ihres Gesundheitszustands geht, teilen Sie uns
        bitte möglichst genau mit, was passiert ist.
    `;
}


/* =========================================================
   CHAT TIME
========================================================= */

function getCurrentChatTime() {

    const now = new Date();

    return now.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit"
    });

}

/* =========================================================
   PROFILE
========================================================= */

function saveProfile() {

    const input =
        document.getElementById("profileName");

    if (!input) return;

    const name =
        input.value.trim();

    if (!name) {

        toast(t("profileNameRequired"));

        return;
    }

    const sidebarName =
        document.getElementById("sidebarName");

    const topName =
        document.getElementById("topName");

    const welcomeName =
        document.getElementById("welcomeName");

    if (sidebarName) {
        sidebarName.textContent =
            name;
    }

    if (topName) {
        topName.textContent =
            name;
    }

    if (welcomeName) {
        welcomeName.textContent =
            name.split(" ")[0];
    }

    toast(t("profileSaved"));
}


/* =========================================================
   ACCESSIBILITY
========================================================= */

function toggleLargeText(checkbox) {

    if (!checkbox) return;

    if (checkbox.checked) {

        document.body.style.fontSize =
            "18px";

        toast(
            t("largeTextEnabled")
        );

    } else {

        document.body.style.fontSize =
            "16px";

        toast(
            t("largeTextDisabled")
        );
    }
}


/* =========================================================
   SOS
========================================================= */

function openSOS() {

    document.getElementById("modalContent").innerHTML = `

        <div style="text-align:center">

            <div style="font-size:55px">
                🆘
            </div>

            <h2>
                ${t("emergencyQuestion")}
            </h2>

            <p style="
                color:#81908b;
                font-size:13px;
                line-height:1.6;
            ">
                ${t("emergencyInfo")}
            </p>

            <div style="
                background:#fff0ee;
                padding:12px;
                border-radius:9px;
                color:#b23e38;
                font-size:12px;
                margin:15px 0;
            ">

                ${t("realEmergency")}
                <strong>112</strong>
                ${currentLanguage === "id"
                    ? " harus dihubungi."
                    : " anrufen."
                }

            </div>

            <button
                class="primary-btn"
                style="background:#d94d45"
                onclick="confirmSOS()"
            >
                ${t("confirmSOS")}
            </button>

        </div>
    `;

    openModal();
}


function confirmSOS() {

    closeModal();

    const notification =
        document.getElementById("notificationCount");

    if (notification) {
        notification.textContent = "4";
    }

    toast(
        t("simulatedEmergency")
    );
}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function showNotifications() {

    document.getElementById("modalContent").innerHTML = `

        <h2>
            ${t("notifications")}
        </h2>

        <div
            class="warning"
            style="margin:15px 0"
        >

            ⚠️

            <div>

                <strong>
                    ${currentLanguage === "id"
                        ? "Kunjungan perawatan hari ini"
                        : "Pflegebesuch heute"
                    }
                </strong>

                <p>
                    ${currentLanguage === "id"
                        ? "Perawat Revita datang pukul 09:30."
                        : "Pflegefachperson Revita kommt um 09:30 Uhr."
                    }
                </p>

            </div>

        </div>

        <div style="
            background:#f2f7f5;
            padding:13px;
            border-radius:10px;
            font-size:12px;
        ">

            💊

            ${currentLanguage === "id"
                ? "Pengingat: Bisoprolol dijadwalkan hari ini pukul 20:00."
                : "Erinnerung: Bisoprolol ist heute um 20:00 Uhr geplant."
            }

        </div>
    `;

    openModal();
}


/* =========================================================
   MODAL
========================================================= */

function openModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.add("show");
    }
}


function closeModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

    const toastBox =
        document.getElementById("toast");

    if (!toastBox) return;

    toastBox.textContent =
        message;

    toastBox.classList.add("show");

    setTimeout(() => {

        toastBox.classList.remove("show");

    }, 2500);
}


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

function setLanguage(lang) {

    if (!translations[lang]) {
        lang = "de";
    }

    currentLanguage =
        lang;

    localStorage.setItem(
        "pflegeDaheimLanguage",
        lang
    );

    document.documentElement.lang =
        lang;

    translatePage();

    const langDE =
        document.getElementById("langDE");

    const langID =
        document.getElementById("langID");

    if (langDE) {
        langDE.classList.toggle(
            "active",
            lang === "de"
        );
    }

    if (langID) {
        langID.classList.toggle(
            "active",
            lang === "id"
        );
    }

    updateDate();

    updateHealthUI();

    calculateRisk();

    updatePageTitle();
}


/* =========================================================
   TRANSLATE STATIC HTML
========================================================= */

/* =========================================================
   TRANSLATE ALL PAGE CONTENT
========================================================= */

function translatePage() {

    const dictionary = translations[currentLanguage];

    if (!dictionary) return;

    /* ==========================================
       1. TRANSLATE ELEMENTS WITH data-i18n
    ========================================== */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (dictionary[key] !== undefined) {

                element.textContent =
                    dictionary[key];
            }
        });


    /* ==========================================
       2. TRANSLATE PLACEHOLDERS
    ========================================== */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (dictionary[key] !== undefined) {

                element.placeholder =
                    dictionary[key];
            }
        });


    /* ==========================================
       3. TRANSLATE STATIC HTML TEXT
       This fixes text that does NOT have
       data-i18n in index.html.
    ========================================== */

    if (currentLanguage === "id") {

        const germanToIndonesian = {};

        Object.keys(translations.de)
            .forEach(key => {

                const german =
                    translations.de[key];

                const indonesian =
                    translations.id[key];

                if (
                    typeof german === "string" &&
                    typeof indonesian === "string" &&
                    german.trim() !== ""
                ) {

                    germanToIndonesian[
                        german.trim()
                    ] = indonesian;
                }

            });


        document
            .querySelectorAll(
                "body *:not(script):not(style)"
            )
            .forEach(element => {

                element.childNodes.forEach(node => {

                    if (
                        node.nodeType !== Node.TEXT_NODE
                    ) {
                        return;
                    }

                    const original =
                        node.nodeValue;

                    const trimmed =
                        original.trim();

                    if (!trimmed) return;

                    const translated =
                        germanToIndonesian[
                            trimmed
                        ];

                    if (
                        translated !== undefined
                    ) {

                        node.nodeValue =
                            original.replace(
                                trimmed,
                                translated
                            );
                    }

                });

            });

    } else {

        /*
         * When returning to German,
         * restore the original German
         * dictionary values.
         */

        const indonesianToGerman = {};

        Object.keys(translations.de)
            .forEach(key => {

                const german =
                    translations.de[key];

                const indonesian =
                    translations.id[key];

                if (
                    typeof german === "string" &&
                    typeof indonesian === "string" &&
                    indonesian.trim() !== ""
                ) {

                    indonesianToGerman[
                        indonesian.trim()
                    ] = german;
                }

            });


        document
            .querySelectorAll(
                "body *:not(script):not(style)"
            )
            .forEach(element => {

                element.childNodes.forEach(node => {

                    if (
                        node.nodeType !== Node.TEXT_NODE
                    ) {
                        return;
                    }

                    const original =
                        node.nodeValue;

                    const trimmed =
                        original.trim();

                    if (!trimmed) return;

                    const translated =
                        indonesianToGerman[
                            trimmed
                        ];

                    if (
                        translated !== undefined
                    ) {

                        node.nodeValue =
                            original.replace(
                                trimmed,
                                translated
                            );
                    }

                });

            });

    }

}

/* =========================================================
   PAGE TITLE
========================================================= */

function updatePageTitle() {

    const page =
        document.querySelector(
            ".page.active-page"
        );

    if (!page) return;

    const titleKeys = {

        dashboard:
            "dashboard",

        gesundheit:
            "healthMonitor",

        medikamente:
            "medications",

        sturz:
            "fallPrevention",

        pflegeplan:
            "carePlan",

        telemedizin:
            "telemedicine",

        berichte:
            "careReports",

        nachrichten:
            "messages",

        einstellungen:
            "settings"

    };

    const key =
        titleKeys[page.id];

    const pageTitle =
        document.getElementById(
            "pageTitle"
        );

    if (
        pageTitle &&
        key
    ) {

        pageTitle.textContent =
            t(key);
    }
}


/* =========================================================
   SECURITY HELPER
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   START APP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHealthUI();

        calculateRisk();

        updateDate();

        setLanguage(
            currentLanguage
        );

    }
);
export const LOCALES = ['en', 'es', 'pt', 'de', 'fr', 'ja'] as const;
export type SupportedLocale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export interface LocaleInfo {
  code: SupportedLocale;
  name: string;
  flag: string;
}

export const LOCALE_MAP: Record<SupportedLocale, LocaleInfo> = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  pt: { code: 'pt', name: 'Português', flag: '🇧🇷' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵' },
};

export const ui = {
  en: {
    seo: {
      title: 'Make PNG | Free AI Background Remover (100% Private)',
      description:
        'Instantly remove backgrounds from images for free. Our AI runs entirely in your browser, ensuring 100% privacy with zero server uploads or subscriptions.',
      ogTitle: 'Make PNG: Free In-Browser Background Remover',
      ogDescription:
        'Turn any photo into a transparent PNG instantly using local AI processing. No watermarks, no sign-ups.',
      keywords:
        'free background remover, ai background removal, transparent png maker, remove bg online, client side ai, in browser background remover, free png cutout, no watermark bg remover, cut out image free',
    },
    nav: {
      brandName: 'MakePNG',
      badge: 'Client-Side AI',
      howItWorks: 'How it Works',
      whyMakePng: 'Why Make PNG',
      faq: 'FAQ',
      privateBadge: '100% Private',
      supportShort: 'Support',
      supportFull: 'Support the Developer',
      github: 'GitHub Repository',
      themeToggleAria: 'Toggle dark or light theme',
      languagePickerAria: 'Select language',
    },
    workspace: {
      heroBadge: 'Zero Server Uploads · 100% Client-Side',
      heroTitle1: 'Remove Any Background',
      heroTitle2: 'Instantly & Privately',
      heroSubtitle:
        'Turn any photo into a transparent PNG using in-browser AI. No sign-ups, no file size limits, and no watermarks — ever.',
      dropActive: 'Drop your image here',
      dropInactive: 'Drag & drop your image here',
      dropHint: 'or tap to browse files · JPG, PNG, WebP',
      trySample: 'Try Sample Image',
      speedBadge: '⚡',
      speedCallout1: '1st run caches the AI model',
      speedCallout2: 'All next removals are instant (1–2s)!',
      statusInitializing: 'Initializing AI engine…',
      statusDownloading: 'Downloading AI model to cache…',
      statusInference: 'Removing background…',
      statusProcessing: 'Processing…',
      progressComplete: 'complete',
      cacheAlertTitle: '⚡ One-Time AI Cache Setup',
      cacheAlertLine1: 'The first time takes a few extra seconds to download the AI model.',
      cacheAlertLine2:
        'Once cached in your browser, all future images will process super fast & instantly (1–2s) with 100% privacy!',
      errorTitle: 'Something went wrong',
      errorDefault:
        'Background removal failed. Please try a different image or refresh the page.',
      errorUnsupported:
        'Unsupported format. Please upload a JPG, PNG, or WebP image.',
      errorSample:
        'Could not load sample image. Please upload an image directly.',
      errorTryAgain: 'Try Again',
      previewOriginal: 'Original',
      previewRemoved: 'Background Removed',
      btnOriginal: 'Original',
      btnShowResult: 'Show Result',
      btnNewImage: 'New Image',
      btnDownload: 'Download PNG',
    },
    howItWorks: {
      title: 'How to Remove Background for Free',
      subtitle: 'Four simple steps — no software installation or account required.',
      step1Title: 'Upload',
      step1Desc: 'Drag and drop your JPG, PNG, or WebP image into the upload area.',
      step2Title: 'AI Processes',
      step2Desc: 'In-browser neural network automatically detects and cuts out the subject.',
      step3Title: 'Preview',
      step3Desc: 'Inspect the transparent cutout on the checkered transparency canvas.',
      step4Title: 'Download',
      step4Desc: 'Click "Download PNG" to save your high-resolution cutout instantly.',
    },
    whyMakePng: {
      title: 'Why Choose Make PNG?',
      subtitle: 'Engineered for ultimate speed, total privacy, and ease of use.',
      feature1Title: 'Uncompromised Privacy',
      feature1Desc:
        'Powered by WebAssembly & ONNX runtime. Your photos never leave your device and are never uploaded to the cloud.',
      feature2Title: 'Completely Free',
      feature2Desc:
        'No credit card, no subscription traps, no daily limits, and no watermarks. Unlimited exports forever.',
      feature3Title: 'Lightning Fast',
      feature3Desc:
        'Once the AI model is cached locally in your browser, background removal runs in seconds without server latency.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: "Everything you need to know about Make PNG's in-browser AI tool.",
      q1: 'Is Make PNG completely free to use?',
      a1: 'Yes! Make PNG is 100% free forever. There are no subscriptions, no daily limits, no account sign-up requirements, and zero watermarks added to your exported transparent PNG files.',
      q2: 'Are my images uploaded to any cloud server?',
      a2: 'No, never. Make PNG uses state-of-the-art WebAssembly and ONNX Runtime to execute the entire AI neural network directly in your local browser cache. Your photos never leave your device.',
      q3: 'What image formats can I upload?',
      a3: 'Make PNG supports all major standard web image formats including JPG, JPEG, PNG, and WebP files. You can download the cutout as a crisp, full-resolution transparent PNG.',
      q4: 'How fast is the background removal process?',
      a4: 'After the initial AI model download is cached in your browser on the first use, all subsequent background removals happen in approximately 1 to 3 seconds with zero network latency.',
    },
    footer: {
      tagline: 'Free & 100% Client-Side AI · Open Source under MIT License.',
      support: 'Support the Developer',
      github: 'GitHub',
    },
  },

  es: {
    seo: {
      title: 'Make PNG | Quitar Fondo con IA Gratis (100% Privado)',
      description:
        'Elimina el fondo de tus fotos gratis al instante. Nuestra IA se ejecuta enteramente en tu navegador, garantizando 100% de privacidad sin subir fotos a servidores.',
      ogTitle: 'Make PNG: Eliminador de Fondos Gratis en el Navegador',
      ogDescription:
        'Convierte cualquier foto en un PNG transparente al instante con IA local. Sin marcas de agua y sin registrarse.',
      keywords:
        'quitar fondo gratis, eliminador de fondos con ia, hacer png transparente, borrar fondo online, ia local, recortar imagen gratis, quitar fondo sin marca de agua',
    },
    nav: {
      brandName: 'MakePNG',
      badge: 'IA en el Navegador',
      howItWorks: 'Cómo Funciona',
      whyMakePng: 'Por Qué Make PNG',
      faq: 'Preguntas Frecuentes',
      privateBadge: '100% Privado',
      supportShort: 'Apoyar',
      supportFull: 'Apoyar al Desarrollador',
      github: 'Repositorio GitHub',
      themeToggleAria: 'Cambiar tema claro u oscuro',
      languagePickerAria: 'Seleccionar idioma',
    },
    workspace: {
      heroBadge: 'Sin Servidores · 100% Procesamiento Local',
      heroTitle1: 'Elimina Cualquier Fondo',
      heroTitle2: 'Al Instante y en Privado',
      heroSubtitle:
        'Convierte cualquier imagen en un PNG transparente usando IA directamente en tu navegador. Sin registros, sin límites y sin marcas de agua.',
      dropActive: 'Suelta tu imagen aquí',
      dropInactive: 'Arrastra y suelta tu imagen aquí',
      dropHint: 'o haz clic para explorar · JPG, PNG, WebP',
      trySample: 'Probar Imagen de Muestra',
      speedBadge: '⚡',
      speedCallout1: 'La primera vez descarga el modelo de IA',
      speedCallout2: '¡Los siguientes recortes son instantáneos (1-2s)!',
      statusInitializing: 'Iniciando motor de IA…',
      statusDownloading: 'Descargando modelo de IA en caché…',
      statusInference: 'Eliminando el fondo…',
      statusProcessing: 'Procesando…',
      progressComplete: 'completado',
      cacheAlertTitle: '⚡ Configuración Única de Caché de IA',
      cacheAlertLine1: 'La primera ejecución descarga el modelo de IA en tu navegador.',
      cacheAlertLine2:
        '¡Una vez en caché, todas las imágenes futuras se procesarán de inmediato (1-2s) con privacidad total!',
      errorTitle: 'Ocurrió un error',
      errorDefault:
        'No se pudo eliminar el fondo. Intenta con otra imagen o recarga la página.',
      errorUnsupported:
        'Formato no compatible. Por favor sube una imagen JPG, PNG o WebP.',
      errorSample:
        'No se pudo cargar la imagen de muestra. Intenta subir tu propia imagen.',
      errorTryAgain: 'Intentar de Nuevo',
      previewOriginal: 'Original',
      previewRemoved: 'Fondo Eliminado',
      btnOriginal: 'Original',
      btnShowResult: 'Ver Resultado',
      btnNewImage: 'Nueva Imagen',
      btnDownload: 'Descargar PNG',
    },
    howItWorks: {
      title: 'Cómo Eliminar el Fondo Gratis',
      subtitle: 'Cuatro pasos sencillos — sin instalar programas ni crear cuentas.',
      step1Title: 'Subir',
      step1Desc: 'Arrastra y suelta tu foto JPG, PNG o WebP en la zona de subida.',
      step2Title: 'Procesamiento IA',
      step2Desc: 'La red neuronal en tu navegador detecta y recorta el sujeto automáticamente.',
      step3Title: 'Vista Previa',
      step3Desc: 'Revisa el recorte transparente sobre el lienzo cuadriculado.',
      step4Title: 'Descargar',
      step4Desc: 'Haz clic en "Descargar PNG" para guardar tu recorte en alta resolución.',
    },
    whyMakePng: {
      title: '¿Por Qué Elegir Make PNG?',
      subtitle: 'Diseñado para máxima velocidad, privacidad absoluta y facilidad de uso.',
      feature1Title: 'Privacidad Innegociable',
      feature1Desc:
        'Impulsado por WebAssembly y ONNX. Tus imágenes nunca salen de tu dispositivo ni se suben a la nube.',
      feature2Title: 'Totalmente Gratuito',
      feature2Desc:
        'Sin tarjetas de crédito, sin suscripciones, sin límites diarios y sin marcas de agua.',
      feature3Title: 'Ultrarrápido',
      feature3Desc:
        'Una vez almacenado el modelo de IA en tu navegador, el recorte tarda segundos sin latencia de red.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre la herramienta de IA de Make PNG.',
      q1: '¿Make PNG es completamente gratuito?',
      a1: '¡Sí! Make PNG es 100% gratuito para siempre. No hay suscripciones, ni límites diarios, ni necesidad de registrarse, y tus PNGs se descargan sin ninguna marca de agua.',
      q2: '¿Mis fotos se suben a algún servidor o nube?',
      a2: 'No, en absoluto. Make PNG ejecuta la red neuronal de IA directamente en el navegador mediante WebAssembly. Tus fotos nunca salen de tu ordenador o teléfono.',
      q3: '¿Qué formatos de imagen se admiten?',
      a3: 'Make PNG admite los formatos estándar más comunes: JPG, JPEG, PNG y WebP. Puedes descargar el resultado en PNG transparente en resolución completa.',
      q4: '¿Qué tan rápido es el recorte?',
      a4: 'Tras la descarga inicial del modelo en la caché del navegador, los recortes posteriores tardan aproximadamente de 1 a 3 segundos.',
    },
    footer: {
      tagline: 'IA 100% en el Navegador y Gratuita · Código Abierto bajo Licencia MIT.',
      support: 'Apoyar al Desarrollador',
      github: 'GitHub',
    },
  },

  pt: {
    seo: {
      title: 'Make PNG | Removedor de Fundo com IA Grátis (100% Privado)',
      description:
        'Remova o fundo de imagens instantaneamente de graça. Nossa IA funciona totalmente no seu navegador, garantindo 100% de privacidade sem uploads para servidores.',
      ogTitle: 'Make PNG: Removedor de Fundo Gratuito no Navegador',
      ogDescription:
        'Transforme qualquer foto em PNG transparente com IA local. Sem marcas d’água e sem cadastro.',
      keywords:
        'remover fundo gratis, removedor de fundo ia, criar png transparente, tirar fundo de foto, ia no navegador, recortar imagem online, png sem fundo gratis',
    },
    nav: {
      brandName: 'MakePNG',
      badge: 'IA no Navegador',
      howItWorks: 'Como Funciona',
      whyMakePng: 'Por Que Make PNG',
      faq: 'Perguntas Frequentes',
      privateBadge: '100% Privado',
      supportShort: 'Apoiar',
      supportFull: 'Apoiar o Desenvolvedor',
      github: 'Repositório GitHub',
      themeToggleAria: 'Alternar tema claro ou escuro',
      languagePickerAria: 'Selecionar idioma',
    },
    workspace: {
      heroBadge: 'Zero Uploads para Servidores · 100% no Cliente',
      heroTitle1: 'Remova Qualquer Fundo',
      heroTitle2: 'Instantâneo & Seguro',
      heroSubtitle:
        'Transforme qualquer foto num PNG transparente usando IA direto no navegador. Sem cadastros, sem limites e sem marcas d’água.',
      dropActive: 'Solte sua imagem aqui',
      dropInactive: 'Arraste e solte sua imagem aqui',
      dropHint: 'ou toque para escolher arquivos · JPG, PNG, WebP',
      trySample: 'Testar Imagem de Exemplo',
      speedBadge: '⚡',
      speedCallout1: 'O 1º uso armazena o modelo de IA em cache',
      speedCallout2: 'As próximas remoções são instantâneas (1–2s)!',
      statusInitializing: 'Iniciando motor de IA…',
      statusDownloading: 'Baixando modelo de IA no cache…',
      statusInference: 'Removendo o fundo…',
      statusProcessing: 'Processando…',
      progressComplete: 'concluído',
      cacheAlertTitle: '⚡ Configuração Única de Cache da IA',
      cacheAlertLine1: 'O primeiro uso leva alguns segundos a mais para baixar o modelo de IA.',
      cacheAlertLine2:
        'Uma vez armazenado no navegador, todas as próximas fotos serão processadas instantaneamente (1–2s) com 100% de privacidade!',
      errorTitle: 'Algo deu errado',
      errorDefault:
        'A remoção do fundo falhou. Tente outra imagem ou atualize a página.',
      errorUnsupported:
        'Formato não suportado. Envie uma imagem JPG, PNG ou WebP.',
      errorSample:
        'Não foi possível carregar o exemplo. Por favor envie uma imagem diretamente.',
      errorTryAgain: 'Tentar Novamente',
      previewOriginal: 'Original',
      previewRemoved: 'Fundo Removido',
      btnOriginal: 'Original',
      btnShowResult: 'Ver Resultado',
      btnNewImage: 'Nova Imagem',
      btnDownload: 'Baixar PNG',
    },
    howItWorks: {
      title: 'Como Remover o Fundo Gratuitamente',
      subtitle: 'Quatro passos simples — sem necessidade de instalar programas ou criar conta.',
      step1Title: 'Enviar',
      step1Desc: 'Arraste e solte sua imagem JPG, PNG ou WebP na área indicada.',
      step2Title: 'Processamento com IA',
      step2Desc: 'A rede neural no navegador detecta e recorta o objeto principal automaticamente.',
      step3Title: 'Pré-visualização',
      step3Desc: 'Confira o recorte transparente no fundo quadriculado.',
      step4Title: 'Baixar',
      step4Desc: 'Clique em "Baixar PNG" para salvar o recorte com resolução máxima.',
    },
    whyMakePng: {
      title: 'Por Que Escolher Make PNG?',
      subtitle: 'Desenvolvido para máxima velocidade, privacidade irrestrita e facilidade total.',
      feature1Title: 'Privacidade Total',
      feature1Desc:
        'Baseado em WebAssembly e ONNX Runtime. Suas fotos nunca saem do seu aparelho nem sobem para nuvem.',
      feature2Title: 'Totalmente Grátis',
      feature2Desc:
        'Sem cartão de crédito, sem planos pagos, sem cotas diárias e sem marca d’água.',
      feature3Title: 'Extremamente Rápido',
      feature3Desc:
        'Após salvar o modelo de IA em cache no navegador, o processamento ocorre em segundos.',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber sobre o Make PNG no seu navegador.',
      q1: 'O Make PNG é realmente gratuito?',
      a1: 'Sim! O Make PNG é 100% gratuito para sempre. Não há assinaturas, limites diários ou necessidade de login, e seus PNGs exportados não têm marca d’água.',
      q2: 'Minhas imagens são enviadas para algum servidor?',
      a2: 'Não. O Make PNG executa o modelo de IA exclusivamente no seu navegador via WebAssembly. Os arquivos nunca saem do seu dispositivo.',
      q3: 'Quais formatos de imagem são aceitos?',
      a3: 'O Make PNG aceita os formatos convencionais: JPG, JPEG, PNG e WebP, permitindo exportar em PNG transparente de alta definição.',
      q4: 'Quanto tempo leva para remover o fundo?',
      a4: 'Depois do primeiro carregamento do modelo na memória do navegador, a remoção do fundo leva em média de 1 a 3 segundos.',
    },
    footer: {
      tagline: 'IA Grátis 100% no Navegador · Código Aberto sob Licença MIT.',
      support: 'Apoiar o Desenvolvedor',
      github: 'GitHub',
    },
  },

  de: {
    seo: {
      title: 'Make PNG | Kostenloser KI-Hintergrundentferner (100% Privat)',
      description:
        'Hintergrund von Bildern kostenlos und sofort entfernen. Unsere KI läuft komplett in Ihrem Browser – 100% Datenschutz ohne Server-Uploads.',
      ogTitle: 'Make PNG: Kostenloser Hintergrundentferner im Browser',
      ogDescription:
        'Jedes Foto mit lokaler KI sofort in ein transparentes PNG verwandeln. Keine Wasserzeichen, keine Anmeldung.',
      keywords:
        'hintergrund entfernen kostenlos, ki hintergrund entfernen, transparentes png erstellen, freistellen online, browser ki, bild freistellen ohne wasserzeichen',
    },
    nav: {
      brandName: 'MakePNG',
      badge: 'Client-Seitige KI',
      howItWorks: 'So funktioniert es',
      whyMakePng: 'Vorteile',
      faq: 'Häufige Fragen',
      privateBadge: '100% Privat',
      supportShort: 'Unterstützen',
      supportFull: 'Entwickler unterstützen',
      github: 'GitHub Repository',
      themeToggleAria: 'Dunkles oder helles Design wählen',
      languagePickerAria: 'Sprache auswählen',
    },
    workspace: {
      heroBadge: 'Keine Server-Uploads · 100% im Browser',
      heroTitle1: 'Jeden Hintergrund Entfernen',
      heroTitle2: 'Sofort & Privat',
      heroSubtitle:
        'Verwandeln Sie jedes Foto direkt im Browser mit KI in ein transparentes PNG. Keine Anmeldung, keine Dateigrößenbegrenzung und garantiert keine Wasserzeichen.',
      dropActive: 'Bild hier ablegen',
      dropInactive: 'Bild hierher ziehen & ablegen',
      dropHint: 'oder tippen, um Dateien auszuwählen · JPG, PNG, WebP',
      trySample: 'Beispielbild testen',
      speedBadge: '⚡',
      speedCallout1: '1. Durchlauf speichert das KI-Modell im Cache',
      speedCallout2: 'Alle weiteren Freistellungen erfolgen sofort (1–2 Sek.)!',
      statusInitializing: 'KI-Engine wird gestartet…',
      statusDownloading: 'KI-Modell wird in den Cache geladen…',
      statusInference: 'Hintergrund wird entfernt…',
      statusProcessing: 'Wird verarbeitet…',
      progressComplete: 'abgeschlossen',
      cacheAlertTitle: '⚡ Einmalige KI-Cache-Einrichtung',
      cacheAlertLine1: 'Beim ersten Mal dauert das Laden des KI-Modells einige Sekunden.',
      cacheAlertLine2:
        'Einmal im Browser gecacht, werden alle weiteren Bilder blitzschnell (1–2s) und absolut privat verarbeitet!',
      errorTitle: 'Ein Fehler ist aufgetreten',
      errorDefault:
        'Hintergrundentfernung fehlgeschlagen. Bitte versuchen Sie ein anderes Bild oder laden Sie die Seite neu.',
      errorUnsupported:
        'Nicht unterstütztes Format. Bitte laden Sie eine JPG-, PNG- oder WebP-Datei hoch.',
      errorSample:
        'Beispielbild konnte nicht geladen werden. Bitte laden Sie direkt ein Bild hoch.',
      errorTryAgain: 'Erneut versuchen',
      previewOriginal: 'Original',
      previewRemoved: 'Hintergrund entfernt',
      btnOriginal: 'Original',
      btnShowResult: 'Ergebnis anzeigen',
      btnNewImage: 'Neues Bild',
      btnDownload: 'PNG Herunterladen',
    },
    howItWorks: {
      title: 'So entfernen Sie den Hintergrund kostenlos',
      subtitle: 'Vier einfache Schritte — ohne Software-Installation oder Kundenkonto.',
      step1Title: 'Hochladen',
      step1Desc: 'Ziehen Sie Ihre JPG-, PNG- oder WebP-Datei in das Upload-Feld.',
      step2Title: 'KI-Verarbeitung',
      step2Desc: 'Das lokale neuronale Netz im Browser erkennt und isoliert das Motiv präzise.',
      step3Title: 'Vorschau',
      step3Desc: 'Prüfen Sie den transparenten Ausschnitt auf dem Karomuster.',
      step4Title: 'Herunterladen',
      step4Desc: 'Klicken Sie auf "PNG Herunterladen", um das Bild in voller Auflösung zu sichern.',
    },
    whyMakePng: {
      title: 'Warum Make PNG wählen?',
      subtitle: 'Entwickelt für höchste Geschwindigkeit, kompromisslosen Datenschutz und mühelose Bedienung.',
      feature1Title: 'Kompromisslose Privatsphäre',
      feature1Desc:
        'Angetrieben durch WebAssembly und ONNX Runtime. Ihre Fotos verlassen niemals Ihr Endgerät.',
      feature2Title: 'Völlig Kostenlos',
      feature2Desc:
        'Keine Kreditkarte, keine Abofallen, keine Tageslimits und keine störenden Wasserzeichen.',
      feature3Title: 'Blitzschnell',
      feature3Desc:
        'Nach dem ersten Cachen des KI-Modells erfolgt das Freistellen in wenigen Sekunden lokal.',
    },
    faq: {
      title: 'Häufig gestellte Fragen (FAQ)',
      subtitle: 'Alles, was Sie über das browserbasierte KI-Tool von Make PNG wissen müssen.',
      q1: 'Ist Make PNG wirklich komplett kostenlos?',
      a1: 'Ja! Make PNG ist dauerhaft 100% kostenlos. Es gibt keine versteckten Abos, keine Begrenzungen, keinen Registrierungszwang und keine Wasserzeichen.',
      q2: 'Werden meine Bilder auf externe Server hochgeladen?',
      a2: 'Nein, niemals. Die KI arbeitet komplett lokal in Ihrem Browser mittels WebAssembly. Ihre Fotos verbleiben immer auf Ihrem Gerät.',
      q3: 'Welche Dateiformate werden unterstützt?',
      a3: 'Make PNG unterstützt alle gängigen Standardformate: JPG/JPEG, PNG sowie moderne WebP-Dateien.',
      q4: 'Wie schnell ist das Entfernen des Hintergrunds?',
      a4: 'Sobald das KI-Modell beim ersten Start zwischengespeichert wurde, dauert jeder Zuschnitt in der Regel nur 1 bis 3 Sekunden.',
    },
    footer: {
      tagline: 'Kostenlose & 100% Client-Seitige KI · Open Source unter MIT-Lizenz.',
      support: 'Entwickler unterstützen',
      github: 'GitHub',
    },
  },

  fr: {
    seo: {
      title: 'Make PNG | Supprimer l’Arrière-Plan par IA Gratuit (100% Privé)',
      description:
        'Supprimez gratuitement l’arrière-plan de vos images. Notre IA s’exécute entièrement dans votre navigateur : 100% privée, sans aucun envoi sur serveur.',
      ogTitle: 'Make PNG: Détourage d’Image Gratuit dans le Navigateur',
      ogDescription:
        'Transformez n’importe quelle photo en PNG transparent grâce à une IA locale. Sans filigrane, sans inscription.',
      keywords:
        'supprimer arrière plan gratuit, enlever fond photo ia, détourer image gratuit, png transparent en ligne, ia navigateur, détourage sans filigrane',
    },
    nav: {
      brandName: 'MakePNG',
      badge: 'IA Côté Client',
      howItWorks: 'Comment ça marche',
      whyMakePng: 'Pourquoi Make PNG',
      faq: 'FAQ',
      privateBadge: '100% Privé',
      supportShort: 'Soutenir',
      supportFull: 'Soutenir le développeur',
      github: 'Dépôt GitHub',
      themeToggleAria: 'Basculer entre thème clair et sombre',
      languagePickerAria: 'Sélectionner la langue',
    },
    workspace: {
      heroBadge: 'Zéro Téléversement Serveur · 100% Côté Client',
      heroTitle1: 'Supprimez Tout Arrière-Plan',
      heroTitle2: 'Instantané & Confidentiel',
      heroSubtitle:
        'Convertissez n’importe quelle photo en PNG transparent grâce à une IA exécutée directement dans votre navigateur. Sans inscription, sans limites et sans aucun filigrane.',
      dropActive: 'Déposez votre image ici',
      dropInactive: 'Glissez-déposez votre image ici',
      dropHint: 'ou cliquez pour parcourir vos fichiers · JPG, PNG, WebP',
      trySample: 'Essayer une image exemple',
      speedBadge: '⚡',
      speedCallout1: 'Le 1er lancement met en cache le modèle d’IA',
      speedCallout2: 'Les détourages suivants sont instantanés (1–2s) !',
      statusInitializing: 'Initialisation du moteur IA…',
      statusDownloading: 'Téléchargement du modèle IA dans le cache…',
      statusInference: 'Suppression de l’arrière-plan…',
      statusProcessing: 'Traitement en cours…',
      progressComplete: 'terminé',
      cacheAlertTitle: '⚡ Configuration Unique du Cache IA',
      cacheAlertLine1: 'Le premier lancement nécessite quelques secondes pour télécharger le modèle d’IA.',
      cacheAlertLine2:
        'Une fois en cache dans votre navigateur, toutes vos photos suivantes seront détourées instantanément (1–2s) en toute confidentialité !',
      errorTitle: 'Une erreur est survenue',
      errorDefault:
        'La suppression de l’arrière-plan a échoué. Essayez une autre image ou actualisez la page.',
      errorUnsupported:
        'Format non pris en charge. Veuillez importer un fichier JPG, PNG ou WebP.',
      errorSample:
        'Impossible de charger l’image d’exemple. Veuillez charger directement une photo.',
      errorTryAgain: 'Réessayer',
      previewOriginal: 'Original',
      previewRemoved: 'Arrière-plan supprimé',
      btnOriginal: 'Original',
      btnShowResult: 'Voir le résultat',
      btnNewImage: 'Nouvelle image',
      btnDownload: 'Télécharger le PNG',
    },
    howItWorks: {
      title: 'Comment supprimer le fond gratuitement',
      subtitle: 'Quatre étapes simples — sans aucun logiciel à installer ni compte à créer.',
      step1Title: 'Téléverser',
      step1Desc: 'Glissez-déposez votre image JPG, PNG ou WebP dans la zone de dépôt.',
      step2Title: 'Traitement par IA',
      step2Desc: 'Le réseau de neurones local détecte et isole le sujet avec précision.',
      step3Title: 'Aperçu',
      step3Desc: 'Examinez le découpage transparent sur le damier de contrôle.',
      step4Title: 'Télécharger',
      step4Desc: 'Cliquez sur "Télécharger le PNG" pour récupérer votre fichier en pleine résolution.',
    },
    whyMakePng: {
      title: 'Pourquoi choisir Make PNG ?',
      subtitle: 'Conçu pour une rapidité absolue, une confidentialité totale et une simplicité d’usage.',
      feature1Title: 'Confidentialité Absolue',
      feature1Desc:
        'Propulsé par WebAssembly et ONNX. Vos images ne quittent jamais votre appareil et ne sont jamais téléversées sur le cloud.',
      feature2Title: 'Entièrement Gratuit',
      feature2Desc:
        'Pas de carte bancaire, pas d’abonnement caché, aucune limite journalière et aucun filigrane.',
      feature3Title: 'Ultra Rapide',
      feature3Desc:
        'Une fois le modèle d’IA mémorisé dans le cache local, le détourage s’exécute en quelques secondes.',
    },
    faq: {
      title: 'Foire Aux Questions (FAQ)',
      subtitle: 'Tout ce que vous devez savoir sur l’outil IA dans le navigateur Make PNG.',
      q1: 'Make PNG est-il réellement gratuit ?',
      a1: 'Oui ! Make PNG est 100% gratuit et le restera. Il n’y a aucun abonnement, aucune limite d’utilisation, aucune inscription requise et aucun filigrane ajouté.',
      q2: 'Mes photos sont-elles envoyées sur un serveur distant ?',
      a2: 'Non, jamais. Make PNG exécute l’IA directement au sein de votre navigateur via WebAssembly. Vos données restent exclusivement sur votre appareil.',
      q3: 'Quels sont les formats d’image compatibles ?',
      a3: 'Make PNG prend en charge les formats standards JPG, JPEG, PNG et WebP, et génère un fichier PNG transparent haute fidélité.',
      q4: 'En combien de temps l’arrière-plan est-il supprimé ?',
      a4: 'Après le téléchargement initial du modèle dans le cache, le traitement prend en général seulement 1 à 3 secondes.',
    },
    footer: {
      tagline: 'IA Gratuite 100% Côté Client · Open Source sous licence MIT.',
      support: 'Soutenir le développeur',
      github: 'GitHub',
    },
  },

  ja: {
    seo: {
      title: 'Make PNG | 完全無料のAI背景透過・切り抜きツール (100%プライベート)',
      description:
        '画像の背景をAIで瞬時に自動切り抜き。完全ブラウザ内で動作するため、写真がサーバーに送信されることはなく100%安全・無料です。',
      ogTitle: 'Make PNG: ブラウザ完結型の無料AI背景透過ツール',
      ogDescription:
        'ローカルAIで写真を素早く透過PNGに変換。透かし（ウォーターマーク）なし、会員登録も不要。',
      keywords:
        '背景透過 無料, ai 背景 切り抜き, 透過png 作成, 画像 背景 消す, ブラウザ ai, 写真 切り抜き 無料, ウォーターマークなし 背景透過',
    },
    nav: {
      brandName: 'MakePNG',
      badge: '完全ブラウザ内AI',
      howItWorks: '使い方',
      whyMakePng: '選ばれる理由',
      faq: 'よくある質問',
      privateBadge: '100% プライベート',
      supportShort: '支援する',
      supportFull: '開発者を支援する',
      github: 'GitHub リポジトリ',
      themeToggleAria: 'ダーク／ライトモードの切り替え',
      languagePickerAria: '言語の選択',
    },
    workspace: {
      heroBadge: 'サーバー送信ゼロ · 100%端末内処理',
      heroTitle1: 'あらゆる写真の背景を',
      heroTitle2: '瞬時に、安全に自動消去',
      heroSubtitle:
        'ブラウザ上で動作する最新AIが写真を瞬時に透過PNGへ変換。会員登録不要、枚数無制限、透かし（ウォーターマーク）も一切入りません。',
      dropActive: 'ここに画像をドロップ',
      dropInactive: '画像をドラッグ＆ドロップ',
      dropHint: 'またはクリックしてファイルを選択 · JPG, PNG, WebP',
      trySample: 'サンプル画像で試す',
      speedBadge: '⚡',
      speedCallout1: '初回のみAIモデルをキャッシュに保存します',
      speedCallout2: '2回目以降は超高速（1〜2秒）で瞬時に切り抜き完了！',
      statusInitializing: 'AIエンジンを初期化中…',
      statusDownloading: 'AIモデルをブラウザキャッシュに保存中…',
      statusInference: '背景を切り抜き処理中…',
      statusProcessing: '処理中…',
      progressComplete: '完了',
      cacheAlertTitle: '⚡ 初回のみ：AIキャッシュの準備',
      cacheAlertLine1: '初回起動時のみAIモデルのダウンロードに数秒かかります。',
      cacheAlertLine2:
        '一度ブラウザにキャッシュされれば、次回からは1〜2秒の超高速かつ完全プライベートで処理されます！',
      errorTitle: 'エラーが発生しました',
      errorDefault:
        '背景の切り抜きに失敗しました。別の画像で試すか、ページを再読み込みしてください。',
      errorUnsupported:
        '非対応のファイル形式です。JPG、PNG、またはWebP画像をアップロードしてください。',
      errorSample:
        'サンプル画像の読み込みに失敗しました。直接画像をアップロードしてください。',
      errorTryAgain: 'もう一度試す',
      previewOriginal: '元画像',
      previewRemoved: '背景切り抜き済み',
      btnOriginal: '元画像を見る',
      btnShowResult: '切り抜き結果を見る',
      btnNewImage: '別の画像を選ぶ',
      btnDownload: 'PNGをダウンロード',
    },
    howItWorks: {
      title: '無料で背景を切り抜く4つの手順',
      subtitle: 'ソフトウェアのインストールや会員登録は一切不要です。',
      step1Title: 'アップロード',
      step1Desc: 'JPG、PNG、WebP画像をドラッグ＆ドロップまたは選択して読み込みます。',
      step2Title: 'AIが自動処理',
      step2Desc: 'ブラウザ内のニューラルネットワークが被写体を正確に認識して背景を消去します。',
      step3Title: 'プレビュー確認',
      step3Desc: '市松模様の透過キャンバス上で切り抜き仕上がりを確認します。',
      step4Title: 'ダウンロード',
      step4Desc: '「PNGをダウンロード」をクリックし、最高画質の透過画像を保存します。',
    },
    whyMakePng: {
      title: 'Make PNGが選ばれる理由',
      subtitle: '圧倒的な処理スピード、万全のプライバシー保護、極めてシンプルな使いやすさを追求。',
      feature1Title: '妥協のないプライバシー保護',
      feature1Desc:
        'WebAssemblyとONNX Runtimeを採用。写真がクラウドに送信されることは一切なく、端末内だけで完結します。',
      feature2Title: '完全無料・透かしなし',
      feature2Desc:
        'クレジットカード不要、課金トラップなし、利用回数無制限。作成したPNG画像に透かしが入ることもありません。',
      feature3Title: '超高速・待ち時間なし',
      feature3Desc:
        '初回にAIモデルがキャッシュされた後は、サーバー通信の待機時間なしで数秒で仕上がります。',
    },
    faq: {
      title: 'よくあるご質問（FAQ）',
      subtitle: 'Make PNGのブラウザ完結型AIツールに関する疑問にお答えします。',
      q1: 'Make PNGは本当に完全無料で使えますか？',
      a1: 'はい！Make PNGは永久に100%無料です。月額費用、1日の利用上限、会員登録などは一切なく、透かしも入りません。',
      q2: 'アップロードした画像が外部サーバーに保存されることはありますか？',
      a2: 'いいえ、絶対にありません。Make PNGはWebAssembly技術を用いてお客様のブラウザ内だけでAIを実行します。写真が端末の外へ送信されることはありません。',
      q3: 'どの画像形式に対応していますか？',
      a3: '一般的なJPG/JPEG、PNG、WebP形式に対応しています。出力は高品質な透過PNG形式となります。',
      q4: '切り抜き処理にはどのくらい時間がかかりますか？',
      a4: '初回のみAIモデルのキャッシュ保存が必要ですが、2回目以降は通常わずか1〜3秒程度で完了します。',
    },
    footer: {
      tagline: '完全無料・端末内完結のAI画像切り抜き · MITライセンスのオープンソース。',
      support: '開発者を支援する',
      github: 'GitHub',
    },
  },
} as const;

export type TranslationDictionary = (typeof ui)[typeof DEFAULT_LOCALE];

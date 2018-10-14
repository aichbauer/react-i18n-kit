const data = {
  en: {
    basicUsage: {
      text: [
        'Render a text based on the users browser language. If your browsers language is set to `de` it will render `Hallo Welt!` and if the browsers language is set to `en` it will render `Hello World!`',
        'Create the translations for your application.',
        'Import your data and import the `withI18n` function from `react-i18n-kit` and you are ready to go.',
        'Take a look at the output.',
        'As you see you get access to a `i18n` property. To make that enhancer work properly we have to pass an object with with keys set to a [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code. Then the enhancer simply passes only the object with the corresponding language to the `i18n` property.',
        'For example your browser language is set to `en-US`, `props.i18n` will be:',
        'You can pass everything you want into these objects, but every language object has to contain the same keys (in this example `text`), which you will use in your enhanced component.',
      ],
      heading: [
        '# Basic Usage',
      ],
    },
    dynamicApproach: {
      text: [
        'If you wrap a component with the `withI18n` function, 2 properties get exposed. The `i18n` property that holds the text data and the `translate` function. The second property is a function that takes one argument, the language in the [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format.',
        'Lets say, you want your default application to be in `en`, and let the user choose if they want to switch to another language, than  you can change the language based on a user event (e.g. click on a button).',
        'Create the translations for your application.',
        'Import your data and the `withI18n` function from `react-i18n-kit` and you are ready to go.',
        'Take a look at the output.',
      ],
      heading: [
        '# Dynamic Approach',
      ],
    },
    fallback: {
      text: [
        'If a user visits our `Component` with a language we do not support it will use the fallback language you specify in the options (default: `en`).',
        'Now we are using a fallback. In this example `es`.',
        'Create the translations for your application.',
        'Import your data and import the `withI18n` function from `react-i18n-kit` and you are ready to go.',
        'Imagine a user from china visits this Component (since we can not force your browser language to be `zh` we set it as option.lang just for this example, but you would never set options.lang to a language you do not support).',
        'Take a look at the output.',
        'You can set the language and the fallback over the properties of your wrapped component. In the next example we set the fallback to `de`.',
      ],
      heading: [
        '# Using a Fallback',
      ],
    },
    functions: {
      text: [
        'In this section we will get an overview of the functions from this package.',
        'This is the enhancer for your Components. If you wrap your Components in this function you get access to a `i18n` and a `translate` property.',
        'Returns a component which renders the wrapped `Component`.',
        'Parameter | Type | Required | Default | Description\n---|---|---|---|---\nComponent| `Component` | true | | The component that gets rendered\ndata | `object` | true | | The translations for your `Component`\noptions | ``object`` | false | | The options for your translations',
        'An example for the `Component` parameter.',
        'This component gets access to 2 exposed properties. \n\nProperty| Type |Description\n---|---|---\ni18n| `object` | The committed `data` object, but only for the corresponding language \ntranslate | `func` | The function for the dynamic translation (e.g. on a button click)',
        'An example for the `data` parameter.',
        '> If there is no translation for a language it will take the `fallback` which is default to `en`',
        'An example for the `options` parameter.',
      ],
      heading: [
        '# Functions',
        '## withI18n',
        '### Syntax',
        '### Parameters',
        '#### Component',
        '#### data',
        '#### options',
      ],
    },
    index: {
      text: [
        '> I18n for your React Components',
        'Install',
        'Create the translations for your application.',
        'Import your data and import the `withI18n` function from `react-i18n-kit` and you are ready to go.',
        'Take a look at the output.',
      ],
      heading: [
        '# Introduction',
      ],
    },
    installation: {
      text: [
        'You need npm',
        'or yarn',
        'to install this package.',
      ],
      heading: [
        '# ABC',
      ],
    },
  },
  de: {
    basicUsage: {
      text: [
        'Rendern eines Textes basierend auf der Standardspache des Browsers. Wenn die Standardsprache des Browsers auf `de` eingestellt ist wird `Hallo Welt!` gerendert und wenn die Standardsprache des Browsers auf `en` eingestellt ist wird `Hello World!` gerendert.',
        'Erstellen der Übersetzungen für deine Applikation.',
        'Importiere `data` und die `withI18n` Funktion von `react-i18n-kit` und du kannst starten.',
        'Wirf einen Blick auf den Output.',
        'Wie du siehst bekommst du Zugriff auf ein `i18n` property. Damit der Enhancer richtig funktioniert müssen wir ein Objekt übergeben dessen Schlüssel entsprechend der [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) benannt wurden. Der Enhancer übergibt dann der Komponente nur das Objekt mit der korrespondierenden Standardsprache des `i18n` property.',
        'Deine Standardsprache des Browsers ist zum Beispiel auf `en-US` eingestellt, `props.i18n` ist deshalb:',
        'Du kannst was immer du willst diesen Objekten übergeben. Wichtig ist nur dass jedes Sprachobjekt die gleichen Schlüssel besitzt (in unserem Beispiel `text`), welche du dann in deiner Komponente verwenden kannst.',
      ],
      heading: [
        '# Grundlegende Verwendung',
      ],
    },
    dynamicApproach: {
      text: [
        'Wenn man eine Komponente mit mit der `withI18n` Funktion umhüllt, werden 2 properties für diese Komponente freigesetzt. Eben das `i18n` poperty dass die Textdaten enthält und das `translate` property.  Zweiteres ist eine funktion die einen parameter übernimmt, die Sprache im [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Format. Diese Sprache muss natürlich von deiner Übersetzung Unterstützt werden.',
        'Angenommen du möchtest die Sprache deiner Applikation Standardmäßig auf `en` einstellen und dann den/die Nutzer/in entscheiden lassen ob sie eine andere Sprache verwenden möchten. Dann könntest du die Sprache deiner Applikation basierend auf einem Userevent wechseln (z.B ein Klick auf einen Button).',
        'Erstellen der Übersetzungen für deine Applikation.',
        'Importiere `data` und die `withI18n` Funktion von `react-i18n-kit` und du kannst starten.',
        'Wirf einen Blick auf den Output.',
      ],
      heading: [
        '# Dynamischer Ansatz',
      ],
    },
    fallback: {
      text: [
        'Wenn ein/e Nutzer/in unsere `Komponente` aufruft mit einer Sprache die unsere Applikation nicht ünterstützt, verwenden wir eine "Fallback-Sprache" die du in den `options` definieren kannst (Standardmäßig auf `en`).',
        'Jetzt verwenden wir eine "Fallback-Sprache". In diesem Beispiel `es`.',
        'Erstellen der Übersetzungen für deine Applikation.',
        'Importiere `data` und die `withI18n` Funktion von `react-i18n-kit` und du kannst starten.',
        'Stell dir vor ein/e Nutzer/in aus China besucht unsere Applikation (da wir die Standardsprache deines Browsers nicht auf `zh` ändern können setzen wir options.lang nur für dieses Beispiel auf `zh`. Du selbst würdest aber nie die options.lang auf eine Sprache stellen die du nicht unterstützt).',
        'Wirf einen Blick auf den Output.',
        'Du kannst aber auch die Sprache und die "Fallback-Sprache" über die properties deiner umhüllten Komponente setzen. In nachstehenden Fall wird der Fallback auf `de` gesetzt.',
      ],
      heading: [
        '# Verwenden eines "Fallbacks"',
      ],
    },
    functions: {
      text: [
        'In diesem Abschnitt bekommen wir einen Überblick über die Funktionen von diesem "package".',
        'Das ist die Erweiterungsfunktion für unsere Komponenten. Wenn wir unsere Komponenten mit dieser Funktion "umhüllen" bekommen wir Zugriff auf das `i18n` und das `translate` property.',
        'Gibt eine Komponente zurück welche die übergebene Komponente rendert.',
        'Parameter | Typ | Erforderlich | Standardmäßig | Beschreibung\n---|---|---|---|---\nComponent| `Component` | true | | Die Komponente die gerendert werden soll\ndata | `object` | true | | Die Übersetzungen für deine `Component`\noptions | ``object`` | false | | Die Optionen für deine Übersetzungen',
        'Ein Beispiel für den `Component` Parameter.',
        'Diese Komponente bekommt Zugriff auf 2 freigesetzte porperties.\n\nProperty| Typ |Beschreibung\n---|---|---\ni18n| `object` | Das übergebene `data` Objekt, aber nur für die entsprechende Sprache\ntranslate | `func` | Die Funktion zum dynamischen übersetzen (z.B. bei einem Klick auf einem Button)',
        'Ein Beispiel für den `data` Parameter.',
        '> Wenn es keine Übersetzung für eine Sprache gibt wird die "Fallback-Sprache" verwendet, welche Standardmäßig auf `en` gesetzt ist.',
        'Ein Beispiel für den `options` Parameter.',
      ],
      heading: [
        '# Funktionen',
        '## withI18n',
        '### Syntax',
        '### Parameter',
        '#### Component',
        '#### data',
        '#### options',
      ],
    },
    index: {
      text: [
        '> I18n für deine React Komponenten',
        'Installieren.',
        'Erstellen der Übersetzungen für deine Applikation.',
        'Importiere `data` und die `withI18n` Funktion von `react-i18n-kit` und du kannst starten.',
        'Wirf einen Blick auf den Output.',
      ],
      heading: [
        '# Einführung',
      ],
    },
    installation: {
      text: [
        'Du benötigst npm',
        'oder yarn',
        'um dieses "package" zu installieren.',
      ],
      heading: [
        '# Installation',
      ],
    },
  },
};

export { data };

PRIME REACT:
=============

PrimeREACT is an open-source UI Library for REACT with native components created by PrimeTek. The support is provided by the company as well as for the community users.

It is similar to Material UI, React Bootstrap, etc. to build an app that needs a lot of customization of elements.

requirements:
node v12.18.2
npm v6.14.5
PrimeReact 5.0.0

Website: https://www.primefaces.org/primereact/


$ npm install primereact
$ npm install primeicons

// import { ComponentName } from 'primereact/{componentname}';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

<Dialog visible={state} onHide={() => setState(false)}>
    // content
</Dialog>

<Button label="Show" onClick={() => setState(true)} />

# npm install primereact primeicons classname react-transition-group

Navigate to index.js file and put these imports at the top of the file:

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

Prime react contains components for data visualization (charts)
It contains following dependency libraries.
•	Charts : Charts.js 2.1.x
•	GMap : Google Maps
•	Editor : Quill.js

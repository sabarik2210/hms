const db = require('./DB/index');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyparse = require('body-parser');

app.use(cors());
app.use(bodyparse.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparse.json());


const { patient_Route, Invoice_Route, Doctor_Route, Equipment_Route, Diagnosis_Route } = require('./Router/commonRouter')
app.use('/', patient_Route, Invoice_Route, Doctor_Route, Equipment_Route, Diagnosis_Route)


app.listen(5001, () => {
    console.log('Backend server is Running');
})
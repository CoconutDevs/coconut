polyglot = new Polyglot()
polyglot.extend({
    "Home": "Home"
    "Sync": "Sync"
    "Scanner": "Scanner"
    "verifyAdmin": "To start please verify Administrator Identification by placing thumb on the scanner and pressing the \"Scan\" button."
    "scan": "Scan"
    "cannotId": "The system was unable to identify this person."
    "scanAgain": "Scan again"
    "clickEnroll": "Click the button to Enroll your fingerprint to the Simprints server."
    "enroll": "Enroll"
    "idConfirmed":"ID verification Confirmed"
    "registered": "You have been registered to use this device."
    "doYouwant": "Do you want to:"
    "registerIndividualButton": "Register a new individual"
    "enterNewReport": "Enter a new report"
    "newReport": "New Report"
    "ClickFormName": "Click the name of the form you wish to use:"
    "trichiasisSurgery": "Trichiasis Surgery"
    "Trichiasis Surgery": "Trichiasis Surgery"
    "postOperativeFollowup": "Post-operative Followup"
    "postOperativeFollowupAbbrev": "Post-operative Followup"
    "Post-Operative Followup": "Post-operative Followup"
    "DateTime": "Date/Time"
    "RefusedSurgery": "Refused Surgery"
    "ProvidedEpilationConsultation": "Provided consultation on epilation"
    "Lefteye": "Left eye"
    "TypeofOperationL": "Type of Operation"
    "TypeofOperationL::BTRP": "BTRP"
    "TypeofOperationL::Trabut": "Trabut"
    "SutureTypeL": "Suture Type"
    "SutureTypeL::Silk": "Silk"
    "SutureTypeL::Absorbable": "Absorbable"
    "ClampusedL": "Clamp used"
    "ComplicationsL": "Complications"
    "ExcessbleedingL": "Excess bleeding"
    "MarginfragmantseveredL": "Margin fragmant severed"
    "GlobePunctureL": "Globe Puncture"
    "ComplicationsReferralL": "Referred to hospital because of complication"
    "ReferralHospitalL": "Name of hospital patient referred to"
    "Righteye": "Right eye"
    "TypeofOperationR": "Type of Operation"
    "TypeofOperationR::BTRP": "BTRP"
    "TypeofOperationR::Trabut": "Trabut"
    "SutureTypeR": "Suture Type"
    "SutureTypeR::Silk": "Silk"
    "SutureTypeR::Absorbable": "Absorbable"
    "ClampusedR": "Clamp used"
    "ComplicationsR": "Complications"
    "ExcessbleedingR": "Excess bleeding"
    "MarginfragmantseveredR": "Margin fragmant severed"
    "GlobePunctureR": "Globe Puncture"
    "ComplicationsReferralR": "Referred to hospital because of complication"
    "ReferralHospitalR": "Name of hospital patient referred to"
    "PostSurgicalTreatments": "Post-Surgical Treatments"
    "azithromycinR": "Azithromycin"
    "tetracyclineEyeOintmentR": "Tetracycline eye ointment"
    "Submit": "Submit"
    "Post-OperativeFollowup": "Post-Operative Followup"
    "Nameofprocedurebeingfollowed": "Name of procedure being followed"
    "Nameofprocedurebeingfollowed::Hydrocele":"Hydrocele"
    "Nameofprocedurebeingfollowed::Trichiasis":"Trichiasis"
    "SelectOne": "Select One"
    "Hydrocele": "Hydrocele"
    "TrichiasisSurgery": "Trichiasis Surgery"
    "Followupdate": "Followup date"
    "Followupdate::1 week": "1 week"
    "Followupdate::2 weeks": "2 weeks"
    "Followupdate::1 month": "1 month"
    "Followupdate::6 months": "6 months"
    "Followupdate::1 year": "1 year"
    "Recurrence": "Recurrence"
    "Complicationsrefertoclinichospital": "Complications - refer to clinic/hospital"
    "Continuemonitoring": "Continue monitoring"
    "Complete": "Complete"
    "Submit": "Submit"
    "AdminRegistration": "Admin Registration"
    "Admin Registration": "Admin Registration"
    "Name": "Name"
    "Entername": "(Enter name)"
    "Profession": "Profession"
    "Association": "Association"
    "District": "District"
    "Individualregistration": "Individual registration"
    "Individual Registration": "Individual registration"
    "Gender": "Gender"
    "Gender::Male": "Male"
    "Gender::Female": "Female"
    "Male": "Male"
    "Female": "Female"
    "DOB": "DOB (date of birth)"
    "clientInstructions":"Please read the following text to the client:"
    "clientText":"We want you to know that the fingerprint scan is only used to verify your identity. We will only associate your gender and age with your fingerprint. No other identifiable information will be stored about you."
    "consentQuestion":"Do you consent to having your fingerprint scanned?"
    "consentProceed":"If the client has consented, please proceed."
    "scanInstructions":"To identify or register an individual, please place thumb on the scanner and press the 'Scan' button."
    "sendData":"Send data"
    "replicationLog":"Replication Log"
    "replicationLogDescription":"The replication log displays the result of replication to the master server."
    "refreshLog":"Refresh log"
    "PatientRecordListing":"Patient record listing"
    "Male":"Male"
    "Female":"Female"
    "dateOfBirth":"Date of birth"
    "Question":"Question"
    "User":"User"
    "dateModified":"Date Modified"
    "scanFailed":"Scan failed: Unable to capture fingerprint. Please kill the app in the Task Manager and restart the app."
    "server":"Server"
    "Instructions":"Instructions"
    "RegistrationComplete":"Registration complete."
    "NoClientLoaded":"No client loaded"
    "Error":"Error"
    "Enter":"Enter"
    "email": "E-mail address"
    "deviceError": "Error: Either a fingerprint device is not attached or the attached fingerprint device is not supported.  Please kill the app in the Task Manager, connect the device, and restart the app."
    "version": "Version"
    "updateForms": "Update forms"

})
Handlebars.registerHelper   'polyglot', (phrase)->
    polyglot.t(phrase)



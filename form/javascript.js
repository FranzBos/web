function onPrivacyCheckBoxChanged() {
    var privacyCheckBox = document.getElementById('privacyCheckBox')
    var signUpButton = document.getElementById('signUpButton')
    signUpButton.disabled = !privacyCheckBox.checked
}
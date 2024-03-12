function contact() {
    let elements = {
        'content' : document.querySelector('#content'),
        'form' : document.createElement('form'),
        'nameDiv' : document.createElement('div'),
        'mailDiv' : document.createElement('div'),
        'subjectDiv' : document.createElement('div'),
        'messageDiv' : document.createElement('div'),
        'nameLabel' : document.createElement('label'),
        'mailLabel' : document.createElement('label'),
        'subjectLabel' : document.createElement('label'),
        'messageLabel' : document.createElement('label'),
        'nameInput' : document.createElement('input'),
        'mailInput' : document.createElement('input'),
        'subjectInput' : document.createElement('input'),
        'messageInput' : document.createElement('input'),
        'button' : document.createElement('button'),
    }

    const labelText = {
        'name' : 'Name',
        'mail' : 'E-mail',
        'subject' : 'Subject',
        'message' : 'Message',
    };

    elements.content.innerHTML = '';

    elements.content.appendChild(elements.form);
    elements.form.appendChild(elements.nameDiv);
    elements.form.appendChild(elements.mailDiv);
    elements.form.appendChild(elements.subjectDiv);
    elements.form.appendChild(elements.messageDiv);
    elements.form.appendChild(elements.button);
    elements.nameDiv.appendChild(elements.nameLabel);
    elements.nameDiv.appendChild(elements.nameInput);
    elements.mailDiv.appendChild(elements.mailLabel);
    elements.mailDiv.appendChild(elements.mailInput);
    elements.subjectDiv.appendChild(elements.subjectLabel);
    elements.subjectDiv.appendChild(elements.subjectInput);
    elements.messageDiv.appendChild(elements.messageLabel);
    elements.messageDiv.appendChild(elements.messageInput);

    elements.nameLabel.textContent = labelText.name;
    elements.mailLabel.textContent = labelText.mail;
    elements.subjectLabel.textContent = labelText.subject;
    elements.messageLabel.textContent = labelText.message;
}

export {contact};
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


// create a reference to the model
let contact = require('../models/contact');

module.exports.displaycontactList = (req, res, next) => {
    contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact/list', 
            {title: 'contacts', 
            contactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newcontact = contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    contact.create(newcontact, (err, contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: "Edit contact", contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedcontact = contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    contact.updateOne({_id: id}, updatedcontact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect("/contact-list");
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect("/contact-list");
        }
    });
}
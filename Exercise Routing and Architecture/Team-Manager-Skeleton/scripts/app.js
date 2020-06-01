import { createFormEntity } from './form-helpers.js'
import { fireBaseRequestFactory } from './firebase-requester.js'

const firebaseTeams = fireBaseRequestFactory('https://teammanager-3b13e.firebaseio.com/', 'teams', sessionStorage.getItem('token'))

async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.username = sessionStorage.getItem('username');
    this.loggedIn = !!sessionStorage.getItem('token');
    this.hasNoTeam = true;
}

function setTokenAndUsername(response) {
    firebase.auth().currentUser.getIdToken().then(token => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', response.user.email);
    });
}

var app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // define a 'route'
    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/about', aboutViewHandler);
    this.get('#/login', loginViewHandler);
    this.post('#/login', () => false);
    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);
    this.get('#/logout', logoutHandler);
    this.get('#/catalog', catalogViewHandler);
    this.get('#/create', createTeamViewHandler);
    this.post('#/create', () => false);
    this.get('#/catalog/:id', catalogueDetailsViewHandler);
    this.get('#/join/:id', joinTeamHandler);
});

async function homeViewHandler() {
    await applyCommon.call(this);

    await this.partial('templates/home/home.hbs');
}

async function aboutViewHandler() {
    await applyCommon.call(this);

    await this.partial('templates/about/about.hbs');
}

async function loginViewHandler() {
    await applyCommon.call(this);
    this.partials.loginForm = await this.load('./templates/login/loginForm.hbs');

    await this.partial('templates/login/loginPage.hbs');

    const formRef = document.getElementById('login-form');

    formRef.addEventListener('submit', (e) => {
        const form = createFormEntity(formRef, ['username', 'password']);
        const formValue = form.getValue();

        firebase
            .auth()
            .signInWithEmailAndPassword(formValue.username, formValue.password)
            .then((response) => {
                setTokenAndUsername(response);
                this.redirect('#/home');
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    })
}

async function registerViewHandler() {
    await applyCommon.call(this);
    this.partials.registerForm = await this.load('./templates/register/registerForm.hbs');

    await this.partial('templates/register/registerPage.hbs');

    const registerForm = document.getElementById('register-form');

    let form = createFormEntity(registerForm, ['username', 'password', 'repeatPassword']);
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formValue = form.getValue();
        if (formValue.password !== formValue.repeatPassword) {
            alert('Passwords are not the same');
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(formValue.username, formValue.password)
            .then(response => {
                setTokenAndUsername(response);
                this.redirect('#/home');
            });
    })
}

async function catalogViewHandler() {
    await applyCommon.call(this);

    this.teams = Object.entries(await firebaseTeams.getAll()
        .then(x => x || {}))
        .map(([id, value]) => ({ _id: id, ...value }));

    this.partials.team = await this.load('./templates/catalog/team.hbs');
    await this.partial('templates/catalog/teamCatalog.hbs');
}

async function createTeamViewHandler() {
    await applyCommon.call(this);
    this.partials.createForm = await this.load('templates/create/createForm.hbs');

    await this.partial('templates/create/createPage.hbs');

    const registerForm = document.getElementById('create-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let form = createFormEntity(registerForm, ['name', 'comment']);
        let formValue = form.getValue();

        firebaseTeams.createEntity(formValue)
            .then(x => {
                this.redirect('#/catalog');
            });
    })
}

async function catalogueDetailsViewHandler() {
    await applyCommon.call(this);
    const id = this.params.id.replace(':', '');
    this.teamId = id;
    let data = await firebaseTeams.getById(id);
    
    this.name = data.name;
    this.comment = data.comment;

    this.partials.teamMember = await this.load('./templates/catalog/teamMember.hbs');
    this.partials.teamControls = await this.load('./templates/catalog/teamControls.hbs');
    await this.partial('templates/catalog/details.hbs');
}

function logoutHandler() {
    sessionStorage.clear();
    firebase.auth().signOut();

    this.redirect('#/home');
}

async function joinTeamHandler(){
    const id = this.params.id.replace(':', '');
    
    // TODO
    this.redirect(`#/catalog/${this.params.id}`);
}

app.run('#/');

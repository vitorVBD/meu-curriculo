
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    job.href = 'https://www.linkedin.com/in/vitor-bittencourt-8ab27bbb/'

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = 'https://wa.me/+5524992161353'

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function udpateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education');
    education.innerHTML = profileData.education.map(education => `<li>
                        <h3 class="title">${education.name}</h3>
                        <p>${education.period}<br>${education.description}</p>
                    </li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => `<li>
                        <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                        <a href="${project.url}" target="_blank">${project.url}</a>
                    </li>`).join('');
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    udpateHardSkills(profileData);
    updateLanguages(profileData);
    updateEducation(profileData);
    updatePortfolio(profileData);
})();
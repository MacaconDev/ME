// This file contains JavaScript code for dynamic interactions on the profile page.

document.addEventListener('DOMContentLoaded', () => {
    const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];
    const favoriteGames = ['The Legend of Zelda', 'Minecraft', 'Among Us', 'Stardew Valley'];
    const favoriteSongs = ['Bohemian Rhapsody', 'Blinding Lights', 'Shape of You', 'Hotel California'];

    const skillsList = document.getElementById('skills');
    const gamesList = document.getElementById('favorite-games');
    const songsList = document.getElementById('favorite-songs');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    favoriteGames.forEach(game => {
        const li = document.createElement('li');
        li.textContent = game;
        gamesList.appendChild(li);
    });

    favoriteSongs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        songsList.appendChild(li);
    });
});
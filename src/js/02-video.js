import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//get controls
const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

//resume player
resumePlayerFromLastTime(player, localStorage.getItem('videoplayer-current-time'));

//upd last time

player.on('timeupdate', ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
});

// player.on('timeupdate', ({ seconds }) => {
//   throttle(localStorage.setItem('videoplayer-current-time', seconds), 2000);
// });

function resumePlayerFromLastTime(currentPlayer, currentTime) {
  if (currentTime) currentPlayer.setCurrentTime(currentTime);
}

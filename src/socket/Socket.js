import openSocket from 'socket.io-client';
import API_URL from '../../config';

const socket = openSocket(API_URL);

export default socket;

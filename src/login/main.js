export default function Login() {
	return new Promise((res, rej) => {
		var createButton = document.getElementById('create-button');
		var joinButton = document.getElementById('join-button');

		var createInput = document.getElementById('stream-name');
		var nameInput = document.getElementById('player-name');
		var joinInput = document.getElementById('room-key');

		createButton.addEventListener('click', ev => {
			let request = new XMLHttpRequest();

			var playerName = nameInput.value;
			var streamName = createInput.value;

            request.onload = () => res(JSON.parse(request.responseText));
            request.open("POST", "/create", true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			request.send(`player-name=${playerName}&stream-name=${streamName}`);
		});
	})
}
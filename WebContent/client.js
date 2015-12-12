/**
 * Client to the game
 */

function s4() {
	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function guid() {
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4()
			+ s4() + s4();
}

function createNewPlayer() {
	var inputField = document.getElementById("initial_player_name");
	var playerName = inputField.value;
	inputField.value = "";

	var guid = Math.random();

	var row = document.getElementById("player_console").insertRow(-1);

	row.insertCell(0).innerHTML = playerName;

	var textBoxForPlayer = document.createElement("input");
	textBoxForPlayer.setAttribute("type", "text");
	textBoxForPlayer.id = "bid_" + guid;
	textBoxForPlayer.placeholder = "Enter bid amount";
	row.insertCell(1).appendChild(textBoxForPlayer);

	var buttonForPlayer = document.createElement("input");
	buttonForPlayer.setAttribute("type", "button");
	buttonForPlayer.id = "button_" + guid;
	buttonForPlayer.value="Bid";
	buttonForPlayer.onclick = function() {
		registerBid(guid)
	};
	row.insertCell(2).appendChild(buttonForPlayer);

}

function registerBid(guid) {
	var inputField = document.getElementById("bid_" + guid);
	var bidAmount = inputField.value;
	inputField.value = "";
	window.alert(bidAmount);
}

function updateUI() {
	var status = JSON.parse(getStatusJson());
	var firstUnbidItem = updateItemList(status);
	updateItemToBeBid(status, firstUnbidItem);
	updatePlayerStatus(status);
}

function getStatusJson() {
	return '{"items":[{"index":0, "type":"t1", "winner":"player1", "winningAmount": 10}'
			+ ',{"index":1,"type":"t2"},{"index":2, "type":"t3"}]'
			+ ',"itemTypeName":{"t1":"Spock", "t2":"Avatar Book Collection"'
			+ ',"t3":"Evoque Die Cast model","t4":"Nutella Custom Jar"}'
			+ ', "itemFileName":{"t1":"img/spock.png","t2":"img/avatar.png"'
			+ ',"t3":"img/range_rover.png", "t4":"img/your_nutella.png"},'
			+ '"playerStatus": [{ "name": "player1", "guid": "guid1", "amountLeft": 50, "itemsAcquired":{"t1":5, "t2":1} }'
			+ ',{ "name": "player2", "guid": "guid2", "amountLeft": 75, "itemsAcquired":{"t3":4, "t4":7} }]}';
}

function updateItemList(status) {
	itemListTable = document.getElementById("itemsTable");
	var index;
	var firstUnbidItem;
	for (index = 0; index < status["items"].length; index++) {
		var row = itemListTable.insertRow(index + 1);
		row.insertCell(0).innerHTML = status["items"][index]["index"];

		var itemType = status["items"][index]["type"];
		row.insertCell(1).innerHTML = status["itemTypeName"][itemType];

		if ("winner" in status["items"][index]) {
			row.insertCell(2).innerHTML = status["items"][index]["winner"];
			row.insertCell(3).innerHTML = status["items"][index]["winningAmount"];
		} else if (firstUnbidItem == null) {
			firstUnbidItem = status["items"][index];
		}
	}
	return firstUnbidItem;
}

function updateItemToBeBid(status, firstUnbidItem) {
	var itemType;
	if (firstUnbidItem == null) {
		window.alert("Game Over!");
	} else {
		itemType = firstUnbidItem["type"]
		img = document.getElementById("bidImage")
		img.src = status["itemFileName"][itemType];
	}
}

function updatePlayerStatus(status) {
	var index;
	playerTable = document.getElementById("playerTable")
	// add item type columns
	itemTypes = Object.keys(status["itemTypeName"]);
	var firstRow = playerTable.insertRow(0);
	firstRow.insertCell(0).innerHTML = "Player Name";
	firstRow.insertCell(1).innerHTML = "Amount Left";
	for (index = 0; index < itemTypes.length; index++) {
		var newCell = firstRow.insertCell(index + 2);
		// newCell.maxWidth = "10px";
		var image = document.createElement("img")
		image.src = status["itemFileName"][itemTypes[index]];
		image.class = "image";

		image.width = 50;
		newCell.appendChild(image);
		// newCell.innerHTML = status["itemTypeName"][itemTypes[index]];
		newCell.id = itemTypes[index];
	}
	// add player status
	for (index = 0; index < status["playerStatus"].length; index++) {
		var player = status["playerStatus"][index];
		var row = playerTable.insertRow(index + 1);

		row.insertCell(0).innerHTML = player["name"];
		row.insertCell(1).innerHTML = player["amountLeft"];

		var columnNum;
		for (columnNum = 2; columnNum < itemTypes.length + 2; columnNum++) {
			itemTypeOfColumn = playerTable.rows[0].cells[columnNum].id;
			if (itemTypeOfColumn in player["itemsAcquired"]) {
				row.insertCell(columnNum).innerHTML = player["itemsAcquired"][itemTypeOfColumn];
			} else {
				row.insertCell(columnNum).innerHTML = 0;
			}
		}
	}
}
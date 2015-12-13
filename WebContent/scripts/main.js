/**
 * Client to the game
 */
var gameStatus;

function getInitialStatus() {
	return '{                     '
    +'    "items": [{                 '
    +'        "index": 0,             '
    +'        "type": "t1"            '
    +'    }, {                        '
    +'        "index": 1,             '
    +'        "type": "t2"            '
    +'    }, {                        '
    +'        "index": 2,             '
    +'        "type": "t3"            '
    +'    }],                         '
    +'    "itemTypeName": {           '
    +'        "t1": "Ursa",           '
    +'        "t2": "Bow_e",          '
    +'        "t3": "Georgie",        '
    +'        "t4": "Rafiki"          '
    +'    },                          '
    +'    "itemFileName": {           '
    +'        "t1": "img/Ursa.jpg",   '
    +'        "t2": "img/Bow_e.jpg",  '
    +'        "t3": "img/Georgie.jpg",'
    +'        "t4": "img/Rafiki.jpg"  '
    +'    },                          '
    +'    "playerStatus": []          '
	+'}';
}
function onLoad() {
	gameStatus = JSON.parse(getInitialStatus());
	document.getElementById("button_createHumanPlayer").disabled = false;
	document.getElementById("button_createBotPlayer").disabled = false;
	document.getElementById("button_startAuction").disabled = true;
	setupCleanTableRows();
}

function setupCleanTableRows() {
	var colIndex, rowIndex;

	// ----------Item List-----------
	var itemListTable = document.getElementById("itemsTable");

	// remove any elements
	for (rowIndex = itemListTable.rows.length - 1; rowIndex > 0; rowIndex--) {
		itemListTable.deleteRow(rowIndex);
	}

	// add blank rows
	var items = gameStatus.items;
	for (rowIndex = 1; rowIndex <= items.length; rowIndex++) {
		var row = itemListTable.insertRow(rowIndex);
		for (colIndex = 0; colIndex < itemListTable.rows[0].cells.length; colIndex++) {
			row.insertCell(colIndex);
		}
	}

	// ----------Player Status-----------
	var playerStatusTable = document.getElementById("playerTable");
	// remove old data
	playerStatusTable.innerHTML = "";
	// add first Row
	var firstRow = playerStatusTable.createTHead().insertRow(0);
	firstRow.insertCell(0).innerHTML = "Player Name";
	firstRow.insertCell(1).innerHTML = "Amount Left";
	var itemTypes = Object.keys(gameStatus.itemFileName);
	for (colIndex = 2; colIndex < itemTypes.length + 2; colIndex++) {
		var newCell = firstRow.insertCell(colIndex);
		var image = document.createElement("img")
		image.src = gameStatus["itemFileName"][itemTypes[colIndex - 2]];
		image.class = "image";

		image.width = 50;
		newCell.appendChild(image);
		newCell.id = itemTypes[colIndex - 2];
	}
	playerStatusTable.appendChild(firstRow);
}

function generateGuid() {
	return (Math.random() * 10000000000000).toString();
}

function createHumanPlayer() {
	var inputField = document.getElementById("initial_player_name");
	var playerName = inputField.value;
	if (playerName == "") {
		return;
	}
	// todo check for duplicate name
	inputField.value = "";

	var guid = generateGuid();

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
	buttonForPlayer.value = "Bid";
	buttonForPlayer.disabled = true;
	buttonForPlayer.onclick = function() {
		registerBid(guid)
	};
	row.insertCell(2).appendChild(buttonForPlayer);

	/*
	 * var newPlayer = Player(playerName, guid);
	 * status["playerStatus"].push(newPlayer);
	 */
	var newPlayer = {
		"guid" : guid,
		"name" : playerName,
		"amountLeft" : 100,
		"itemsAcquired" : []
	};
	gameStatus.playerStatus.push(newPlayer);

	// enable startAuction when 2 players created
	if (gameStatus["playerStatus"].length == 2) {
		document.getElementById("button_startAuction").disabled = false;
	}

	// put player's entry in playerStatus
	var playerStatusTable = document.getElementById("playerTable");
	var newRow = playerStatusTable.insertRow(-1);
	newRow.id = "playerStatus_" + newPlayer.guid;
	newRow.insertCell(0).innerHTML = newPlayer.name;
	newRow.insertCell(1).innerHTML = newPlayer.amountLeft;
	var index;
	for (index = 2; index < playerStatusTable.rows[0].cells.length; index++) {
		newRow.insertCell(index).innerHTML = 0;
	}
}

function startAuction() {
	document.getElementById("button_createHumanPlayer").disabled = true;
	document.getElementById("button_createBotPlayer").disabled = true;
	document.getElementById("button_startAuction").disabled = true;

	var firstUnbidItem = updateItemListAndReturnFirstUnbidItem();
	updateItemToBeBid(firstUnbidItem);
	enableBidButtons();
	document.getElementById("mainWindow").style.visibility = "visible";
}

function enableBidButtons() {
	
	for (var index in gameStatus.playerStatus) {
		var button_guid = "button_" + gameStatus.playerStatus[index].guid;
		document.getElementById(button_guid).disabled = false;
	}
}

function registerBid(guid) {
	var inputField = document.getElementById("bid_" + guid);
	var bidAmount = inputField.value;
	inputField.value = "";
	window.alert(bidAmount);
}

function getStatusJson() {
	return '';
}

function updateItemListAndReturnFirstUnbidItem() {
	var itemListTable = document.getElementById("itemsTable");
	var index;
	var firstUnbidItem;

	for (index = 0; index < gameStatus.items.length; index++) {
		var row = itemListTable.rows[index + 1];
		row.cells[0].innerHTML = gameStatus.items[index].index;

		var itemType = gameStatus.items[index].type;
		row.cells[1].innerHTML = gameStatus.itemTypeName[itemType];

		if ("winner" in gameStatus.items[index]) {
			row.cells[2].innerHTML = gameStatus.items[index].winner;
			row.cells[3].innerHTML = gameStatus.items[index].winningAmount;
		} else if (firstUnbidItem == null) {
			firstUnbidItem = gameStatus.items[index];
		}
	}

	return firstUnbidItem;
}

function updateItemToBeBid(firstUnbidItem) {
	var itemType;
	if (firstUnbidItem == null) {
		window.alert("Game Over! No winner :/");
		resetGame();
	} else {
		itemType = firstUnbidItem.type;
		img = document.getElementById("bidImage");
		img.src = gameStatus.itemFileName[itemType];
	}
}

function resetGame() {
	onLoad();
}

function updatePlayerStatus(status) {
	var index;
	playerTable = document.getElementById("playerTable")
	// add item type columns
	itemTypes = Object.keys(status["itemTypeName"]);
	var firstRow = playerTable.insertRow(0);
	firstRow.insertCell(0).innerHTML = "Player Name";
	firstRow.insertCell(1).innerHTML = "Amount Left";
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
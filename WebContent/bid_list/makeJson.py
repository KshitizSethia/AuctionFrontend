if __name__=="__main__":
    itemNames = "\"itemTypeName\": { \"t1\": \"Ursa\", \"t2\": \"Bow_e\", \"t3\": \"Georgie\", \"t4\": \"Rafiki\", \"t5\": \"Winter Tree\" }"
    itemFilePaths = "\"itemFileName\": { \"t1\": \"img/Ursa.jpg\", \"t2\": \"img/Bow_e.jpg\", \"t3\": \"img/Georgie.jpg\", \"t4\": \"img/Rafiki.jpg\", \"t5\": \"img/WinterTree.jpg\" }"
    playerStatus = "\"playerStatus\": [] "
    
    file = open("bid_items.txt", "r")
    index=1
    itemList = []
    for line in file:
        itemList.append("{ \"index\": "+str(index)+", \"type\": \""+line.strip()+"\" }")
        index+=1
    #itemList.append("]")
    
    result = "{ \"items\":[" + ",".join(itemList) +"], " +itemNames +", " +itemFilePaths +"," +playerStatus +"}"
    
    outfile = open("bid_items.json","w")
    outfile.write(result);
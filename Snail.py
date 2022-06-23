def snail(snail_map):
    length = len(snail_map)
    
    if length == 1: return snail_map[0]
    if length == 0: return []
    
    FirstColumn = [snail_map[i][0] for i in range(length-2, 0, -1)]
    LastColumn = [snail_map[i][length - 1] for i in range(1, length - 1)]
    LastRow = [snail_map[length - 1][-i] for i in range(1, length + 1)]
    result = snail_map[0] + LastColumn + LastRow + FirstColumn
    
    return result + snail([l[1 : -1] for l in snail_map[1 : -1]])

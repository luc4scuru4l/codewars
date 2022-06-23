import numpy as np
def good_vs_evil(good, evil):
    GoodsW = [1, 2, 3, 3, 4, 10]
    EvilsW = [1, 2, 2, 2, 3, 5, 10]
    result = np.dot(list(map(int, good.split(' '))), GoodsW) - np.dot(list(map(int, evil.split(' '))), EvilsW) 
    result = min(1, max(-1, result))
    return {
        -1 : 'Battle Result: Evil eradicates all trace of Good',
        0 : 'Battle Result: No victor on this battle field',
        1 : 'Battle Result: Good triumphs over Evil'
    }[result]

calcs = dict()
def longest_slide_down(pyramid):
    if len(pyramid) == 1: return pyramid[0][0]
    l = tuple([tuple(l[:-1]) for l in pyramid[1:]])
    r = tuple([tuple(l[1:]) for l in pyramid[1:]])
    try:
        left_pyramid = calcs[l]
    except KeyError:
        left_pyramid = longest_slide_down(l)
        calcs[l] = left_pyramid
    try:
        right_pyramid = calcs[r]
    except KeyError:
        right_pyramid = longest_slide_down(r)
        calcs[r] = right_pyramid
    return pyramid[0][0] + (left_pyramid if left_pyramid > right_pyramid else right_pyramid)

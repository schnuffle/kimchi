// These tables map the js keyboard keys to the spice equivalent
wdi.KeymapDE = function() {

    // regular keys with associated chars. The columns  means all the event flux to activate the key (i.e. [key up, key down])
    // all the js events associated to these keys should have a charKey associated
    var charmapDE = {};
    charmapDE['º']   = [[0x29, 0, 0, 0], [0xA9, 0, 0, 0]];
    charmapDE['ª']   = [[0x2A, 0, 0, 0], [0x29, 0, 0, 0], [0xA9, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['\\']  = [[0xE0, 0x38, 0, 0], [0x29, 0, 0, 0], [0xA9, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['1']   = [[0x2, 0, 0, 0], [0x82, 0, 0, 0]];
    charmapDE['!']   = [[0x2A, 0, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['|']   = [[0xE0, 0x38, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['2']   = [[0x3, 0, 0, 0], [0x83, 0, 0, 0]];
    charmapDE['"']   = [[0x2A, 0, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['@']   = [[0xE0, 0x38, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['3']   = [[0x4, 0, 0, 0], [0x84, 0, 0, 0]];
    charmapDE['·']   = [[0x2A, 0, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['#']   = [[0xE0, 0x38, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['4']   = [[0x5, 0, 0, 0], [0x85, 0, 0, 0]];
    charmapDE['$']   = [[0x2A, 0, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['~']   = [[0xE0, 0x38, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['5']   = [[0x6, 0, 0, 0], [0x86, 0, 0, 0]];
    charmapDE['%']   = [[0x2A, 0, 0, 0], [0x6, 0, 0, 0], [0x86, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['6']   = [[0x7, 0, 0, 0], [0x87, 0, 0, 0]];
    charmapDE['&']   = [[0x2A, 0, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['¬']   = [[0xE0, 0x38, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['7']   = [[0x8, 0, 0, 0], [0x88, 0, 0, 0]];
    charmapDE['/']   = [[0x2A, 0, 0, 0], [0x8, 0, 0, 0], [0x88, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['8']   = [[0x9, 0, 0, 0], [0x89, 0, 0, 0]];
    charmapDE['(']   = [[0x2A, 0, 0, 0], [0x9, 0, 0, 0], [0x89, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['9']   = [[0x0A, 0, 0, 0], [0x8A, 0, 0, 0]];
    charmapDE[')']   = [[0x2A, 0, 0, 0], [0x0A, 0, 0, 0], [0x8A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['0']   = [[0x0B, 0, 0, 0], [0x8B, 0, 0, 0]];
    charmapDE['=']   = [[0x2A, 0, 0, 0], [0x0B, 0, 0, 0], [0x8B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['\'']  = [[0x0C, 0, 0, 0], [0x8C, 0, 0, 0]];
    charmapDE['?']   = [[0x2A, 0, 0, 0], [0x0C, 0, 0, 0], [0x8C, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['¡']   = [[0x0D, 0, 0, 0], [0x8D, 0, 0, 0]];
    charmapDE['¿']   = [[0x2A, 0, 0, 0], [0x0D, 0, 0, 0], [0x8D, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['q']   = [[0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapDE['Q']   = [[0x2A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['w']   = [[0x11, 0, 0, 0], [0x91, 0, 0, 0]];
    charmapDE['W']   = [[0x2A, 0, 0, 0], [0x11, 0, 0, 0], [0x91, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['e']   = [[0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['E']   = [[0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['€']   = [[0xE0, 0x38, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['r']   = [[0x13, 0, 0, 0], [0x93, 0, 0, 0]];
    charmapDE['R']   = [[0x2A, 0, 0, 0], [0x13, 0, 0, 0], [0x93, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['t']   = [[0x14, 0, 0, 0], [0x94, 0, 0, 0]];
    charmapDE['T']   = [[0x2A, 0, 0, 0], [0x14, 0, 0, 0], [0x94, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['y']   = [[0x15, 0, 0, 0], [0x95, 0, 0, 0]];
    charmapDE['Y']   = [[0x2A, 0, 0, 0], [0x15, 0, 0, 0], [0x95, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['u']   = [[0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['U']   = [[0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['i']   = [[0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['I']   = [[0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['o']   = [[0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['O']   = [[0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['p']   = [[0x19, 0, 0, 0], [0x99, 0, 0, 0]];
    charmapDE['P']   = [[0x2A, 0, 0, 0], [0x19, 0, 0, 0], [0x99, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['`']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x39, 0, 0, 0], [0xb9, 0, 0, 0]];
    charmapDE['à']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['À']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['è']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['È']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['ì']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['Ì']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['ò']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['Ò']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['ù']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['Ù']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['â']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['Â']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['ê']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['Ê']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['î']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['Î']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['ô']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['Ô']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['û']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['Û']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['^']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x39, 0, 0, 0], [0xb9, 0, 0, 0]];
    charmapDE['[']   = [[0xE0, 0x38, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['+']   = [[0x1B, 0, 0, 0], [0x9B, 0, 0, 0]];
    charmapDE['*']   = [[0x2A, 0, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE[']']   = [[0xE0, 0x38, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['a']   = [[0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['A']   = [[0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['s']   = [[0x1F, 0, 0, 0], [0x9F, 0, 0, 0]];
    charmapDE['S']   = [[0x2A, 0, 0, 0], [0x1F, 0, 0, 0], [0x9F, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['d']   = [[0x20, 0, 0, 0], [0xA0, 0, 0, 0]];
    charmapDE['D']   = [[0x2A, 0, 0, 0], [0x20, 0, 0, 0], [0xA0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['f']   = [[0x21, 0, 0, 0], [0xA1, 0, 0, 0]];
    charmapDE['F']   = [[0x2A, 0, 0, 0], [0x21, 0, 0, 0], [0xA1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['g']   = [[0x22, 0, 0, 0], [0xA2, 0, 0, 0]];
    charmapDE['G']   = [[0x2A, 0, 0, 0], [0x22, 0, 0, 0], [0xA2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['h']   = [[0x23, 0, 0, 0], [0xA3, 0, 0, 0]];
    charmapDE['H']   = [[0x2A, 0, 0, 0], [0x23, 0, 0, 0], [0xA3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['j']   = [[0x24, 0, 0, 0], [0xA4, 0, 0, 0]];
    charmapDE['J']   = [[0x2A, 0, 0, 0], [0x24, 0, 0, 0], [0xA4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['k']   = [[0x25, 0, 0, 0], [0xA5, 0, 0, 0]];
    charmapDE['K']   = [[0x2A, 0, 0, 0], [0x25, 0, 0, 0], [0xA5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['l']   = [[0x26, 0, 0, 0], [0xA6, 0, 0, 0]];
    charmapDE['L']   = [[0x2A, 0, 0, 0], [0x26, 0, 0, 0], [0xA6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['ñ']   = [[0x27, 0, 0, 0], [0xA7, 0, 0, 0]];
    charmapDE['Ñ']   = [[0x2A, 0, 0, 0], [0x27, 0, 0, 0], [0xA7, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['á']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['Á']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['é']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['É']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['í']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['Í']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['ó']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['Ó']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['ú']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['Ú']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['ä']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['Ä']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapDE['ë']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['Ë']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapDE['ï']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['Ï']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapDE['ö']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['Ö']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapDE['ü']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['Ü']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapDE['{']   = [[0xE0, 0x38, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['ç']   = [[0x2B, 0, 0, 0], [0xAB, 0, 0, 0]];
    charmapDE['Ç']   = [[0x2A, 0, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['}']   = [[0xE0, 0x38, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapDE['<']   = [[0x56, 0, 0, 0], [0xD6, 0, 0, 0]];
    charmapDE['>']   = [[0x2A, 0, 0, 0], [0x56, 0, 0, 0], [0xD6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['z']   = [[0x2C, 0, 0, 0], [0xAC, 0, 0, 0]];
    charmapDE['Z']   = [[0x2A, 0, 0, 0], [0x2C, 0, 0, 0], [0xAC, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['x']   = [[0x2D, 0, 0, 0], [0xAD, 0, 0, 0]];
    charmapDE['X']   = [[0x2A, 0, 0, 0], [0x2D, 0, 0, 0], [0xAD, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['c']   = [[0x2E, 0, 0, 0], [0xAE, 0, 0, 0]];
    charmapDE['C']   = [[0x2A, 0, 0, 0], [0x2E, 0, 0, 0], [0xAE, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['v']   = [[0x2F, 0, 0, 0], [0xAF, 0, 0, 0]];
    charmapDE['V']   = [[0x2A, 0, 0, 0], [0x2F, 0, 0, 0], [0xAF, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['b']   = [[0x30, 0, 0, 0], [0xB0, 0, 0, 0]];
    charmapDE['B']   = [[0x2A, 0, 0, 0], [0x30, 0, 0, 0], [0xB0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['n']   = [[0x31, 0, 0, 0], [0xB1, 0, 0, 0]];
    charmapDE['N']   = [[0x2A, 0, 0, 0], [0x31, 0, 0, 0], [0xB1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['m']   = [[0x32, 0, 0, 0], [0xB2, 0, 0, 0]];
    charmapDE['M']   = [[0x2A, 0, 0, 0], [0x32, 0, 0, 0], [0xB2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE[',']   = [[0x33, 0, 0, 0], [0xB3, 0, 0, 0]];
    charmapDE[';']   = [[0x2A, 0, 0, 0], [0x33, 0, 0, 0], [0xB3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['.']   = [[0x34, 0, 0, 0], [0xB4, 0, 0, 0]];
    charmapDE[':']   = [[0x2A, 0, 0, 0], [0x34, 0, 0, 0], [0xB4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE['-']   = [[0x35, 0, 0, 0], [0xB5, 0, 0, 0]];
    charmapDE['_']   = [[0x2A, 0, 0, 0], [0x35, 0, 0, 0], [0xB5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapDE[' ']   = [[0x39, 0, 0, 0], [0xb9, 0, 0, 0]];

    // keyboard keys without character associated.
    // all the js events associated to these keys should have a keyChar associated
    var keymapDE = [];

    keymapDE[27]                 = 0x1; // ESC
    keymapDE[9]                 = 0x0F; // TAB
    //keymapDE[20]                = 0x3A; // BLOQ.MAY. => see the charmap, all the capital letters and shift chars send a shift in their sequence
    keymapDE[16]                = 0x2A; // LEFT SHIFT and RIGHT SHIFT
	keymapDE[91]                = 0x1D; // LEFT GUI (META, COMMAND) BINDED TO CONTROL
	keymapDE[17]                = 0x1D; // LEFT CONTROL and RIGHT CONTROL
    //keymapDE[32]                = 0x39; // SPACE => see the charmap
    keymapDE[8]                 = 0x0E; // BACKSPACE
    keymapDE[13]                = 0x1C; // ENTER
    //keymapDE[225]                 = 0x38; // RIGHT ALT (ALT GR) => see the charmap, all the altgr chars send a altgr in their sequence
    keymapDE[18]                = 0x38; // LEFT ALT
  // keymapDE[92]                = 0x5C; // RIGHT GUI (WINDOWS)
    keymapDE[38]                = 0x48; // UP ARROW
    keymapDE[37]                = 0x4B; // LEFT ARROW
    keymapDE[40]                = 0x50; // DOWN ARROW
    keymapDE[39]                = 0x4D; // RIGHT ARROW
    keymapDE[45]                = 0x52; // INSERT
    keymapDE[46]                = 0x53; // DELETE
    keymapDE[36]                = 0x47; // HOME
    keymapDE[35]                = 0x4F; // FIN
    keymapDE[33]                = 0x49; // PAGE UP
    keymapDE[34]                = 0x51; // PAGE UP
    keymapDE[144]               = 0x45; // BLOQ.NUM.
    keymapDE[145]                = 0x46; // SCROLL LOCK
    keymapDE[112]                = 0x3B; // F1
    keymapDE[113]                = 0x3C; // F2
    keymapDE[114]                = 0x3D; // F3
    keymapDE[115]                = 0x3E; // F4
    keymapDE[116]                = 0x3F; // F5
    keymapDE[117]                = 0x40; // F6
    keymapDE[118]                = 0x41; // F7
    keymapDE[119]                = 0x42; // F8
    keymapDE[120]                = 0x43; // F9
    keymapDE[121]                = 0x44; // F10
    keymapDE[122]                = 0x57; // F11
    keymapDE[123]                = 0x58; // F12

    // combination keys with ctrl
    var ctrlKeymapDE = [];

    ctrlKeymapDE[65]                = 0x1E; // a
    ctrlKeymapDE[81]                = 0x10; // q
    ctrlKeymapDE[87]                = 0x11; // w
    ctrlKeymapDE[69]                = 0x12; // e
    ctrlKeymapDE[82]                = 0x13; // r
    ctrlKeymapDE[84]                = 0x14; // t
    ctrlKeymapDE[89]                = 0x15; // y
    ctrlKeymapDE[85]                = 0x16; // u
    ctrlKeymapDE[73]                = 0x17; // i
    ctrlKeymapDE[79]                = 0x18; // o
    ctrlKeymapDE[80]                = 0x19; // p
    ctrlKeymapDE[65]                = 0x1E; // a
    ctrlKeymapDE[83]                = 0x1F; // s
    ctrlKeymapDE[68]                = 0x20; // d
    ctrlKeymapDE[70]                = 0x21; // f
    ctrlKeymapDE[71]                = 0x22; // g
    ctrlKeymapDE[72]                = 0x23; // h
    ctrlKeymapDE[74]                = 0x24; // j
    ctrlKeymapDE[75]                = 0x25; // k
    ctrlKeymapDE[76]                = 0x26; // l
    ctrlKeymapDE[90]                = 0x2C; // z
    ctrlKeymapDE[88]                = 0x2D; // x
    ctrlKeymapDE[67]                = 0x2E; // c
    //ctrlKeymapDE[86]                = 0x2F; // v      to enable set disableClipboard = true in run.js
    ctrlKeymapDE[66]                = 0x30; // b
    ctrlKeymapDE[78]                = 0x31; // n
    ctrlKeymapDE[77]                = 0x32; // m

    // reserved ctrl+? combinations we want to intercept from browser and inject manually to spice
    var reservedCtrlKeymap = [];
    reservedCtrlKeymap[86] = 0x2F;

    return {
        getKeymap: function() {
            return keymapDE;
        },

        getCtrlKeymap: function() {
            return ctrlKeymapDE;
        },

        getReservedCtrlKeymap: function() {
            return reservedCtrlKeymap;
        },

        getCharmap: function() {
            return charmapDE;
        },

        setCtrlKey: function (key, val) {
            ctrlKeymapDE[key] = val;
        }
    };
}( );

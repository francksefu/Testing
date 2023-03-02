function capitalizeString(str) {
    let tab = str.split('');
    tab[0] = tab[0].toUpperCase();
    return tab.join('');
}
capitalizeString('franck');
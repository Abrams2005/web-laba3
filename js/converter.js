/**
 * Функция конвертации французских франков в евро
 * Коэффициент: 1 EUR = 6.55957 FFR
 */
function convertFrancsToEuro(francs) {
    const RATE = 6.55957;
    
    // Проверка корректности значения
    if (typeof francs !== 'number' || isNaN(francs) || francs < 0) {
        console.error('❌ Ошибка: некорректное значение');
        return null;
    }
    
    const euros = (francs / RATE).toFixed(2);
    console.log(`📊 ${francs} FFR = ${euros} EUR`);
    return euros;
}

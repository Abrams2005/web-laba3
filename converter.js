/**
 * Модуль конвертера валют
 * Реализует конвертацию старых французских франков в евро
 * Коэффициент конвертации: 1 EUR = 6.55957 FFR
 */

/**
 * Функция для конвертации французских франков в евро
 * @param {number} francs - Сумма в старых французских франках
 * @returns {number} Эквивалент в евро, округленный до 2 знаков после запятой
 */
function convertFrancsToEuro(francs) {
    // Коэффициент конвертации: 1 EUR = 6.55957 FFR
    const CONVERSION_RATE = 6.55957;
    
    // Проверка корректности входного значения
    if (isNaN(francs) || francs < 0) {
        console.error('❌ Ошибка: введено некорректное значение');
        return null;
    }
    
    // Выполняем конвертацию
    const euros = francs / CONVERSION_RATE;
    
    // Округляем до 2 знаков после запятой
    const roundedEuros = Math.round(euros * 100) / 100;
    
    // Выводим результат в консоль
    console.log(`💱 Конвертация: ${francs} FFR = ${roundedEuros} EUR`);
    
    return roundedEuros;
}

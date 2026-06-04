/**
 * Файл: converter.js
 * Описание: Содержит функцию для конвертации французских франков в евро
 * Коэффициент конвертации: 1 EUR = 6.55957 FFR (или 1 FFR = 0.152449 EUR)
 */

/**
 * Функция конвертации французских франков в евро
 * 
 * @param {number} francs - Сумма в старых французских франках (FFR)
 * @returns {string|null} - Результат конвертации в евро (EUR) с 2 знаками после запятой
 *                          или null в случае ошибки
 * 
 * @example
 * convertFrancsToEuro(100); // Вернёт "15.24"
 */
function convertFrancsToEuro(francs) {
    // Коэффициент конвертации: 1 евро = 6.55957 французского франка
    const CONVERSION_RATE = 6.55957;
    
    // Проверяем входные данные
    if (typeof francs !== 'number' || isNaN(francs)) {
        console.error('❌ Ошибка: некорректный тип данных. Ожидается число.');
        return null;
    }
    
    // Проверяем, что значение неотрицательное
    if (francs < 0) {
        console.error('❌ Ошибка: сумма не может быть отрицательной.');
        return null;
    }
    
    // Выполняем конвертацию
    const euros = francs / CONVERSION_RATE;
    
    // Выводим информацию в консоль
    console.log(`📊 Конвертация: ${francs} FFR → ${euros.toFixed(2)} EUR`);
    console.log(`   Коэффициент: 1 EUR = ${CONVERSION_RATE} FFR`);
    
    // Возвращаем результат с 2 знаками после запятой
    return euros.toFixed(2);
}

/**
 * Функция для расширенной конвертации (опционально)
 * Возвращает объект с полной информацией о конвертации
 * 
 * @param {number} francs - Сумма в старых французских франках (FFR)
 * @returns {object|null} - Объект с информацией о конвертации или null в случае ошибки
 */
function convertFrancsToEuroDetailed(francs) {
    const CONVERSION_RATE = 6.55957;
    
    // Проверяем входные данные
    if (typeof francs !== 'number' || isNaN(francs) || francs < 0) {
        console.error('❌ Ошибка: некорректные входные данные');
        return null;
    }
    
    // Выполняем конвертацию
    const euros = francs / CONVERSION_RATE;
    
    // Возвращаем подробный результат
    const result = {
        originalAmount: francs,
        originalCurrency: 'FFR',
        convertedAmount: parseFloat(euros.toFixed(2)),
        convertedCurrency: 'EUR',
        conversionRate: CONVERSION_RATE,
        timestamp: new Date().toLocaleString('ru-RU')
    };
    
    // Выводим в консоль
    console.log('📋 Полная информация о конвертации:', result);
    
    return result;
}

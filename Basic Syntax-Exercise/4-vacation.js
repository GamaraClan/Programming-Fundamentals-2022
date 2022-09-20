function vacation(count, type, dayOfWeek) {
    let totalPrice = 0;

    if (dayOfWeek === "Friday") {
        switch (type) {
            case "Students":
                totalPrice = count * 8.45;
                break;
            case "Business":
                if (count >= 100) {
                    count = count - 10;
                }
                totalPrice = count * 10.90;
                break;
            case "Regular":
                totalPrice = count * 15;
                break;
        }
    } else if (dayOfWeek === "Saturday") {
        switch (type) {
            case "Students":
                totalPrice = count * 9.80;
                break;
            case "Business":
                if (count >= 100) {
                    count = count - 10;
                }
                totalPrice = count * 15.60;
                break;
            case "Regular":
                totalPrice = count * 20;
                break;
        }
    } else if (dayOfWeek === "Sunday") {
        switch (type) {
            case "Students":
                totalPrice = count * 10.46;
                break;
            case "Business":
                if (count >= 100) {
                    count = count - 10;
                }
                totalPrice = count * 16;
                break;
            case "Regular":
                totalPrice = count * 22.50;
                break;
        }
    }
    if (type === "Students" && count >= 30) {
        totalPrice = totalPrice - ((15 / 100) * totalPrice);
    } else if (type === "Business" && count >= 100) {
        totalPrice = totalPrice;
    } else if (type === "Regular" && count >= 10 && count <= 20) {
        totalPrice = totalPrice - ((5 / 100) * totalPrice);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(100, "Business", "Saturday");
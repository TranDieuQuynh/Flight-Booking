// Hàm tạo hàng ghế
function createSeats(containerId, rows, cols, unavailableSeats = []) {
    const container = document.getElementById(containerId);

    for (let row = 1; row <= rows; row++) {
        let rowHtml = '<div class="row">';
        for (let col = 0; col < cols; col++) {
            const seatLabel = `${row}${String.fromCharCode(65 + col)}`;
            const isUnavailable = unavailableSeats.includes(seatLabel);
            const seatClass = isUnavailable ? 'seat unavailable' : 'seat available';
            rowHtml += `<div class="${seatClass}"><i class="fas fa-chair"></i> ${seatLabel}</div>`;
        }
        rowHtml += '</div>';
        // Thêm hàng ghế vào container mà không xóa nội dung trước đó
        container.insertAdjacentHTML('beforeend', rowHtml);
    }
}


// Tạo ghế cho Hạng Nhất (2 hàng, 4 ghế mỗi hàng)
createSeats('first-class', 2, 4, ['1C', '2B']);

// Tạo ghế cho Hạng Thương Gia (8 hàng, 4 ghế mỗi hàng)
createSeats('business-class', 8, 4, ['3A', '6D']);

// Tạo ghế cho Hạng Phổ Thông (20 hàng, 6 ghế mỗi hàng)
createSeats('economy-class', 20, 6, ['10B', '15E', '18F']);

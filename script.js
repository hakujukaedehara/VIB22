var teamMembers = [
    "Chúc mừng anh Ngô Xuân Dũng vào Team 1",
    "Chúc mừng chị Nguyễn Trần Minh Tú vào Team 1",
    "Chúc mừng chị Đỗ Thị Minh Nguyệt vào Team 2",
    "Chúc mừng anh Mai Thanh Bình vào Team 3",
    "Chúc mừng anh Trần Hữu Thuận vào Team 1",
    "Chúc mừng mẹ Phạm Tú Quỳnh vào Team 2",
    "Chúc mừng chị Nguyễn Thị Thắm vào Team 3",
    "Chúc mừng chị Cung Thị Thanh Thủy vào Team 1",
    "Chúc mừng anh Lê Trần Hải vào Team 2",
    "Chúc mừng anh Hoàng Nguyên Danh vào Team 3",
    "Chúc mừng chị Trần Thanh Hoa vào Team 1",
    "Chúc mừng chị Nguyễn Thu Trang vào Team 2",
    "Chúc mừng anh Lỹ Văn Vũ vào Team 3",
    "Chúc mừng chị Phạm Thị Lý vào Team 2",
    "Chúc mừng chị Trần Ngọc Tuyết Anh vào Team 3",
    "Chúc mừng anh Hoàng Văn Thiếu vào Team 2",
    "Chúc mừng anh Nguyễn Xuân Dũng vào Team 1",
    "Chúc mừng chị Nguyễn Ngọc Hà vào Team 2",
    "Chúc mừng anh Nguyễn Giang Nam vào Team 3",
    "Chúc mừng chị Nguyễn Thị Hồng Nhung vào Team 2",
    "Chúc mừng chị Vũ Hồng Hà vào Team 3",
    "Chúc mừng chị Lê Thị Thanh Tâm vào Team 1",
    "Chúc mừng anh Phạm Hoàng Tuấn vào Team 2",
    "Chúc mừng anh Trần Thế Anh vào Team 2",
    "Chúc mừng anh Vũ Xuân Toàn vào Team 3",
    "Chúc mừng anh Phí Văn Bảo vào Team 1",
    "Chúc mừng anh Trần Văn Chính vào Team 3",
    "Chúc mừng anh Đặng Tùng Hưng vào Team 1",
    "Chúc mừng anh Hà Huy Giáp vào Team 2",
    "Chúc mừng anh Nguyễn Vĩnh Nguyên vào Team 3",
    "Chúc mừng chị Diệp Thị Hòa vào Team 2",
    "Chúc mừng anh Nguyễn Văn Tiệp vào Team 1",
    "Chúc mừng anh Nguyễn Xuân Đô vào Team 3",
    "Chúc mừng chị Lê Thị Kim Thoa vào Team 2",
    "Chúc mừng chị Nguyễn Hồng Hạnh vào Team 3",
    "Chúc mừng anh Trần Chí Linh vào Team 1",
    "Chúc mừng anh Hồ Văn Nên vào Team 1",
    "Chúc mừng chị Lê Thị Thu Thủy vào Team 1",
    "Chúc mừng anh Võ Tấn Đạt vào Team 2",
    "Chúc mừng anh Võ Hoàng Lân vào Team 3",
    "Chúc mừng anh Lê Anh Tuấn vào Team 1",
    "Chúc mừng anh Phạm Tuấn Anh vào Team 3",
    "Chúc mừng chị Vũ Thị Tuyết vào Team 2",
    "Chúc mừng anh Trần Đặng Trung vào Team 3",
    "Chúc mừng anh Trần Quang Hùng vào Team 1",
    "Chúc mừng anh Đặng Hoàng Phương Quang vào Team 1",
    "Chúc mừng anh Đỗ Thái Bình vào Team 2",
    "Chúc mừng chị Bùi Thị Thư vào Team 2",
    "Chúc mừng anh Nguyễn Thế Quốc Bảo vào Team 3",
    "Chúc mừng chị Đặng Thị Kim Cương vào Team 1",
    "Chúc mừng anh Vũ Huy Bình vào Team 3",
    "Chúc mừng anh Nguyễn Xuân Trường vào Team 2",
    "Chúc mừng chị Nguyễn Thị Thanh Hoa vào Team 3",
    "Chúc mừng anh Phạm Tiến Dũng vào Team 1"
];

function searchTeam() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (searchTerm === "") {
        resultDiv.innerHTML = "<p>Vui lòng nhập tên để tìm kiếm.</p>";
        return;
    }

    var foundMembers = teamMembers.filter(function(member) {
        return member.toLowerCase().includes(searchTerm);
    });

    if (foundMembers.length === 0) {
        resultDiv.innerHTML = "<p>Không tìm thấy thành viên nào có tên này.</p>";
    } else {
        foundMembers.forEach(function(member) {
            resultDiv.innerHTML += "<p>" + member + "</p>";
        });
    }
}

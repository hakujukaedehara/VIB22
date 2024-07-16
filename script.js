var teamMembers = [
    "Nguyễn Xuân Dũng, Team 1",
    "Ngô Xuân Dũng, Team 1",
    "Nguyễn Trần Minh Tú, Team 1",
    "Đỗ Thị Minh Nguyệt, Team 2",
    "Mai Thanh Bình, Team 3",
    "Trần Hữu Thuận, Team 1",
    "Phạm Tú Quỳnh, Team 2",
    "Nguyễn Thị Thắm, Team 3",
    "Cung Thị Thanh Thủy, Team 1",
    "Lê Trần Hải, Team 2",
    "Hoàng Nguyên Danh, Team 3",
    "Trần Thanh Hoa, Team 1",
    "Nguyễn Thu Trang, Team 2",
    "Lỹ Văn Vũ, Team 3",
    "Phạm Thị Lý, Team 2",
    "Trần Ngọc Tuyết Anh, Team 3",
    "Hoàng Văn Thiếu, Team 2",
    "Nguyễn Xuân Dũng, Team 1",
    "Nguyễn Ngọc Hà, Team 2",
    "Nguyễn Giang Nam, Team 3",
    "Nguyễn Thị Hồng Nhung, Team 2",
    "Vũ Hồng Hà, Team 3",
    "Lê Thị Thanh Tâm, Team 1",
    "Phạm Hoàng Tuấn, Team 2",
    "Trần Thế Anh, Team 2",
    "Vũ Xuân Toàn, Team 3",
    "Phí Văn Bảo, Team 1",
    "Trần Văn Chính, Team 3",
    "Đặng Tùng Hưng, Team 1",
    "Hà Huy Giáp, Team 2",
    "Nguyễn Vĩnh Nguyên, Team 3",
    "Diệp Thị Hòa, Team 2",
    "Nguyễn Văn Tiệp, Team 1",
    "Nguyễn Xuân Đô, Team 3",
    "Lê Thị Kim Thoa, Team 2",
    "Nguyễn Hồng Hạnh, Team 3",
    "Trần Chí Linh, Team 1",
    "Hồ Văn Nên, Team 1",
    "Lê Thị Thu Thủy, Team 1",
    "Võ Tấn Đạt, Team 2",
    "Võ Hoàng Lân, Team 3",
    "Lê Anh Tuấn, Team 1",
    "Phạm Tuấn Anh, Team 3",
    "Vũ Thị Tuyết, Team 2",
    "Trần Đặng Trung, Team 3",
    "Trần Quang Hùng, Team 1",
    "Đặng Hoàng Phương Quang, Team 1",
    "Đỗ Thái Bình, Team 2",
    "Bùi Thị Thư, Team 2",
    "Nguyễn Thế Quốc Bảo, Team 3",
    "Đặng Thị Kim Cương, Team 1",
    "Vũ Huy Bình, Team 3",
    "Nguyễn Xuân Trường, Team 2",
    "Nguyễn Thị Thanh Hoa, Team 3",
    "Phạm Tiến Dũng, Team 1"
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
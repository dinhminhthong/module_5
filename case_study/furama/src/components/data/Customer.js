const customer = [
    {
        id: 1,
        name: "Đinh Minh Thông",
        dateOfBirth: "2001-02-14",
        gender: "2",
        idCard: "24420011996",
        phoneNumber: "090345",
        email: "minhthong@gmail.com",
        address: "Đà Nẵng",
        customerType: {
            id: 2,
            name: "Platinium"
        }

    },
    {
        id: 2,
        name: "Trần Dăn Anh Quân",
        dateOfBirth: "2001-09-02",
        gender: "2",
        idCard: "24420011996",
        phoneNumber: "0912345",
        email: "anhquan@gmail.com",
        address: "Đà Nẵng",
        customerType: {
            id: 2,
            name: "Gold"
        }

    },
    {
        id: 3,
        name: "Phan Văn Tài Em",
        dateOfBirth: "1991-02-01",
        gender: "2",
        idCard: "24420011996",
        phoneNumber: "0907890",
        email: "taiem@gmail.com",
        address: "Nghệ AN",
        customerType: {
            id: 2,
            name: "Diamond"
        }

    },
    {
        id: 4,
        name: "Trần Anh TỨng",
        dateOfBirth: "2023-02-01",
        gender: "2",
        idCard: "24420011996",
        phoneNumber: "0912312",
        email: "anhtung@gmail.com",
        address: "Quãng Ngãi",
        customerType: {
            id: 2,
            name: "Silver"
        }

    }
];

const customerType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
]
export default {
    customer, customerType
}
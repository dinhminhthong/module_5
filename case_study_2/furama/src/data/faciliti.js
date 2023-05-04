const facility = [
    {
        id : 5,
        name: 'Hồ  bơi',
        area: 1000,
        cost: 5,
        maxPeople: 5,
        facilityType: {
            id: 1,
            name: 'Gold'
        },
        rentType:  {
            id: 1,
            name: '?'
        },
        standardRoom: 'Vip',
        descriptionOtherCovenience: 'good',
        poolArea: 5,
        numberOfFloors: 5,
        facilityFree: "tắm hồ bơi free",
        status: false


    }
];

const facilityType = [
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
];

const rentType = [
    {
        id: 1,
        name: 'full'
    },
    {
        id: 2,
        name: 'half'
    }

]
export default {
    facility, facilityType, rentType
}

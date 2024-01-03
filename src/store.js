import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


// export const useIncStore1 = create((set) => ({
//     val: 10,
//     updateval: (newVal) => set({ val: newVal })
// }));

export const dataSet = (set, get) => ({
    netIncome: {
        duration: "",
        value: "",
    },
    partnerIncome: {
        duration: "",
        value: "",
    },
    rentalIncome: {
        duration: "",
        value: "",
    },
    disabilityBenefit: {
        duration: "",
        value: "",
    },
    homePurchase: {
        duration: "",
        value: "",
    },
    homeRenovation: {
        duration: "",
        value: "",
    },
    carPurchase: {
        duration: "",
        value: "",
    },
    emergencyFund: {
        duration: "",
        value: "",
    },
    retirementFund: {
        duration: "",
        value: "",
    },
    miscellaneous: {
        duration: "",
        value: "",
    },
    studentLoan: {
        duration: "",
        value: "",
    },
    personalLoan: {
        duration: "",
        value: "",
    },
    creditCard: {
        duration: "",
        value: "",
    },
    housing: {
        duration: "",
        value: "",
    },
    communications: {
        duration: "",
        value: "",
    },
    food: {
        duration: "",
        value: "",
    },
    insurance: {
        duration: "",
        value: "",
    },
    transportation: {
        duration: "",
        value: "",
    },
    education: {
        duration: "",
        value: "",
    },
    medical: {
        duration: "",
        value: "",
    },
    personalCare: {
        duration: "",
        value: "",
    },
    recreation: {
        duration: "",
        value: "",
    },
    pets: {
        duration: "",
        value: "",
    },
    clothing: {
        duration: "",
        value: "",
    },
    giftsAndDonations: {
        duration: "",
        value: "",
    },

    storeDuration: (labelid, newValue) => set((state) => ({ [labelid]: { ...state[labelid], duration: newValue } })),
    storeValue: (labelid, newVal) => set((state) => {
        return {
            [labelid]: { ...state[labelid], value: newVal }
        }
    }),
    IncomeSum: () => {

        // if monthly , just add
        // if yearly, divide / 12 and then add
        // if weekly, multiple by 4.30 and then add

        // if (get().netIncome.duration === "Weekly") {
        //     const monthlyNetIncome = ((parseFloat(get().netIncome.value)) * 4.30) || 0;
        // }
        // else if(get().netIncome.duration === "Monthly") {
        //     const monthlyNetIncome = (parseFloat(get().netIncome.value)) || 0;
        // }
        // else if(get().netIncome.duration === "Yearly") {
        //     const monthlyNetIncome = ((parseFloat(get().netIncome.value)) / 12) || 0;
        // }
        // else {
        // const monthlyNetIncome = 0
        // }
        // return (
        //     monthlyNetIncome
        // );


        const sum = (parseFloat(get().netIncome.value) || 0) +
            (parseFloat(get().partnerIncome.value) || 0) +
            (parseFloat(get().rentalIncome.value) || 0) +
            (parseFloat(get().disabilityBenefit.value) || 0);
        console.log(sum)
        return sum;
    },
    SavingsSum: () => {
        const sum = (parseFloat(get().homePurchase.value) || 0) +
            (parseFloat(get().homeRenovation.value) || 0) +
            (parseFloat(get().carPurchase.value) || 0) +
            (parseFloat(get().emergencyFund.value) || 0) +
            (parseFloat(get().retirementFund.value) || 0) +
            (parseFloat(get().miscellaneous.value) || 0)
        return sum;
    },
    ExpensesSum: () => {
        const sum = (parseFloat(get().studentLoan.value) || 0) +
            (parseFloat(get().personalLoan.value) || 0) +
            (parseFloat(get().creditCard.value) || 0) +
            (parseFloat(get().housing.value) || 0) +
            (parseFloat(get().communications.value) || 0) +
            (parseFloat(get().food.value) || 0) +
            (parseFloat(get().insurance.value) || 0) +
            (parseFloat(get().transportation.value) || 0) +
            (parseFloat(get().education.value) || 0) +
            (parseFloat(get().medical.value) || 0) +
            (parseFloat(get().personalCare.value) || 0) +
            (parseFloat(get().recreation.value) || 0) +
            (parseFloat(get().pets.value) || 0) +
            (parseFloat(get().clothing.value) || 0) +
            (parseFloat(get().giftsAndDonations.value) || 0)
        return sum;
    },

    // storage: createJSONStorage(() => localStorage),
})


export const useIncStore = create((persist(dataSet,
    {
        name: 'income',
        storage: createJSONStorage(() => localStorage),
    },
)))

// export const useStore = create(
//     persist(
//         (set, get) => ({
//             income: {
//                 netIncome: {
//                     duration: "",
//                     value: "",
//                 },
//                 partnerIncome: {
//                     duration: "",
//                     value: "",
//                 },
//                 rentalIncome: {
//                     duration: "",
//                     value: "",
//                 },
//                 disabilityBenefit: {
//                     duration: "",
//                     value: "",
//                 },
//             },
//             savings: {
//                 homePurchase: {
//                     duration: "",
//                     value: "",
//                 },
//                 homeRenovation: {
//                     duration: "",
//                     value: "",
//                 },
//                 carPurchase: {
//                     duration: "",
//                     value: "",
//                 },
//                 emergencyFund: {
//                     duration: "",
//                     value: "",
//                 },
//                 retirementFund: {
//                     duration: "",
//                     value: "",
//                 },
//                 miscellaneous: {
//                     duration: "",
//                     value: "",
//                 },
//             },
//             storeDuration: (labelid, newValue) => set((state) => ({ [labelid]: { ...state[labelid], duration: newValue } })),
//             storeValue: (labelid, newVal) => set((state) => ({ [labelid]: { ...state[labelid], value: newVal } })),
//             storeIncomeSum: () => {
//                 const sum = (parseFloat(get().netIncome.value) || 0) +
//                     (parseFloat(get().partnerIncome.value) || 0) +
//                     (parseFloat(get().rentalIncome.value) || 0) +
//                     (parseFloat(get().disabilityBenefit.value) || 0);
//                 console.log(sum)
//                 return sum;
//             },
//             storeSavingsSum: (total) => set(() => ({ sum: total }))
//         })

//     ))


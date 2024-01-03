import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


// export const useIncStore1 = create((set) => ({
//     val: 10,
//     updateval: (newVal) => set({ val: newVal })
// }));

const getMonthlyValue = (state, category) => {
    // if monthly , just add
    // if yearly, divide / 12 and then add
    // if weekly, multiple by 4.30 and then add
    let monthlyValue = 0;
    const duration = state[category].duration
    const value = state[category].value

    if (duration === "Weekly") {
        monthlyValue = ((parseFloat(value)) * 4.30) || 0;
    }
    else if (duration === "Monthly") {
        monthlyValue = (parseFloat(value)) || 0;
    }
    else if (duration === "Yearly") {
        monthlyValue = ((parseFloat(value)) / 12) || 0;
    }
    return monthlyValue;
}

const getMonthlySum = (state, categories) => {
    const values = categories.map(category => getMonthlyValue(state, category));
    const sum = values.reduce(
        (accumulator, currVal) => accumulator + currVal,
        0 // Initial value
    );
    return sum;
}


export const dataSet = (set, get) => ({
    netIncome: {
        duration: "Monthly",
        value: "",
    },
    partnerIncome: {
        duration: "Monthly",
        value: "",
    },
    rentalIncome: {
        duration: "Monthly",
        value: "",
    },
    disabilityBenefit: {
        duration: "Monthly",
        value: "",
    },
    homePurchase: {
        duration: "Monthly",
        value: "",
    },
    homeRenovation: {
        duration: "Monthly",
        value: "",
    },
    carPurchase: {
        duration: "Monthly",
        value: "",
    },
    emergencyFund: {
        duration: "Monthly",
        value: "",
    },
    retirementFund: {
        duration: "Monthly",
        value: "",
    },
    miscellaneous: {
        duration: "Monthly",
        value: "",
    },
    studentLoan: {
        duration: "Monthly",
        value: "",
    },
    personalLoan: {
        duration: "Monthly",
        value: "",
    },
    creditCard: {
        duration: "Monthly",
        value: "",
    },
    housing: {
        duration: "Monthly",
        value: "",
    },
    communications: {
        duration: "Monthly",
        value: "",
    },
    food: {
        duration: "Monthly",
        value: "",
    },
    insurance: {
        duration: "Monthly",
        value: "",
    },
    transportation: {
        duration: "Monthly",
        value: "",
    },
    education: {
        duration: "Monthly",
        value: "",
    },
    medical: {
        duration: "Monthly",
        value: "",
    },
    personalCare: {
        duration: "Monthly",
        value: "",
    },
    recreation: {
        duration: "Monthly",
        value: "",
    },
    pets: {
        duration: "Monthly",
        value: "",
    },
    clothing: {
        duration: "Monthly",
        value: "",
    },
    giftsAndDonations: {
        duration: "Monthly",
        value: "",
    },

    storeDuration: (labelid, newValue) => set((state) => ({ [labelid]: { ...state[labelid], duration: newValue } })),
    storeValue: (labelid, newVal) => set((state) => {
        return {
            [labelid]: { ...state[labelid], value: newVal }
        }
    }),

    IncomeSum: () => {
        const state = get();
        const categories = ["netIncome", "partnerIncome", "rentalIncome", "disabilityBenefit"];
        return getMonthlySum(state, categories);
    },
    SavingsSum: () => {
        const categories = ["homePurchase", "homeRenovation", "carPurchase", "emergencyFund", "retirementFund", "miscellaneous"];
        return getMonthlySum(get(), categories);
    },
    ExpensesSum: () => {
        const state = get();
        const categories = ["studentLoan", "personalLoan", "creditCard", "housing", "communications", "food", "insurance", "transportation", "education", "medical", "personalCare", "recreation", "pets", "clothing", "giftsAndDonations"];
        return getMonthlySum(state, categories);
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


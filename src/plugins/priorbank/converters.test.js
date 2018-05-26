import {chooseDistinctCards} from "./converters";

describe("chooseDistinctCards", () => {
    it("prefers active card", () => {
        const cardContractNumber = "COMMON_CARD_CONTRACT_NUMBER";
        expect(chooseDistinctCards([
            {
                clientObject: {
                    id: 1,
                    prodType: 2,
                    subSystemInstanceId: 4,
                    contract_id: "",
                    externalId: "ext1",
                    identifier: "1111",
                    card_type: "2",
                    cardTypeName: "VISA CLASSIC",
                    type: 6,
                    typeName: "Дебетовая карта",
                    openDate: "2018-01-01T00:00:00+03:00",
                    openDateSpecified: true,
                    closeDateSpecified: false,
                    expDate: "2019-01-01T00:00:00+03:00",
                    expDateSpecified: true,
                    lastComment: "Доступны только пассивные операции Статус карты: Истек срок действия, cтатус картсчёта: 51",
                    currCode: 933,
                    currIso: "BYN",
                    accessStatus: 1,
                    cardStatus: 5,
                    cardStatusName: "Истек срок действия",
                    cardAccStatus: 51,
                    isOpen: 1,
                    isLocked: 0,
                    corNonCor: 2,
                    corNonCorName: "Некорпоративная",
                    pkgName: "NO_PACK_SWT",
                    cardMaskedNumber: "************1111",
                    cardContractNumber: cardContractNumber,
                    cardRBSNumber: "<string[30]>",
                    dopNonDop: 2,
                    cardBin: 0,
                    cardColor: "#FF0000",
                    isCardMain: 0,
                    contractNum: "<string[19]>",
                    contractTypeInt: 0,
                    contractTypeName: "",
                    defaultSynonym: "DK1111",
                    customSynonym: "",
                    contractOpenDateSpecified: false,
                    contractCloseDate: "0001-01-01T00:00:00",
                    cContractCloseDateSpecified: false,
                    dealTerm: 0,
                    rate: 0,
                    elContractCloseDateSpecified: false,
                    minAmount: 0,
                    contractRest: 0,
                    description: "",
                    isStCashCard: 0,
                    stCashCardContractId: "",
                    isElDeposit: false,
                    secure3D: 2,
                    secure3DText: "Есть",
                    smsNotify: 7,
                    smsNotifyText: "СМС+",
                    savings: 0,
                    orderValue: 0,
                    iban: "<string[28]>",
                    bic: "PJCBBY2X",
                    contractNumberReplenishment: "",
                    contractNumberRedemption: "",
                },
            },
            {
                clientObject: {
                    id: 2,
                    prodType: 2,
                    subSystemInstanceId: 4,
                    contract_id: "",
                    externalId: "ext2",
                    identifier: "2222",
                    card_type: "7",
                    cardTypeName: "BELKART",
                    type: 6,
                    typeName: "Дебетовая карта",
                    openDate: "2018-01-01T00:00:00+03:00",
                    openDateSpecified: true,
                    closeDateSpecified: false,
                    expDate: "2019-01-01T00:00:00+03:00",
                    expDateSpecified: true,
                    lastComment: "Доступны все операции Статус карты: Активна, cтатус картсчёта: 51",
                    currCode: 933,
                    currIso: "BYN",
                    accessStatus: 2,
                    cardStatus: 1,
                    cardStatusName: "Активна",
                    cardAccStatus: 51,
                    isOpen: 1,
                    isLocked: 0,
                    corNonCor: 2,
                    corNonCorName: "Некорпоративная",
                    pkgName: "PACK_ST_F_SWT",
                    cardMaskedNumber: "************2222",
                    cardContractNumber: cardContractNumber,
                    cardRBSNumber: "<string[30]>",
                    dopNonDop: 2,
                    cardBin: 0,
                    cardColor: "#FF0000",
                    isCardMain: 0,
                    contractNum: "<string[19]>",
                    contractTypeInt: 0,
                    contractTypeName: "",
                    defaultSynonym: "DK2222",
                    customSynonym: "",
                    contractOpenDateSpecified: false,
                    contractCloseDate: "0001-01-01T00:00:00",
                    cContractCloseDateSpecified: false,
                    dealTerm: 0,
                    rate: 0,
                    elContractCloseDateSpecified: false,
                    minAmount: 0,
                    contractRest: 0,
                    description: "",
                    isStCashCard: 0,
                    stCashCardContractId: "",
                    isElDeposit: false,
                    secure3D: 1,
                    secure3DText: "Нет",
                    smsNotify: 6,
                    smsNotifyText: "Только бесплатные SMS",
                    savings: 0,
                    orderValue: 0,
                    iban: "<string[28]>",
                    bic: "PJCBBY2X",
                    contractNumberReplenishment: "",
                    contractNumberRedemption: "",
                },
            },
        ]).map((x) => x.clientObject.defaultSynonym)).toEqual(["DK2222"]);
    });

    it("uses lowest defaultSynonym", () => {
        const cardContractNumber = "COMMON_CARD_CONTRACT_NUMBER";
        expect(chooseDistinctCards([
            {
                clientObject: {
                    id: 3,
                    prodType: 2,
                    subSystemInstanceId: 4,
                    contract_id: "",
                    externalId: "ext3",
                    identifier: "3333",
                    card_type: "2",
                    cardTypeName: "VISA CLASSIC",
                    type: 6,
                    typeName: "Дебетовая карта",
                    openDate: "2018-01-01T00:00:00+03:00",
                    openDateSpecified: true,
                    closeDateSpecified: false,
                    expDate: "2019-01-01T00:00:00+03:00",
                    expDateSpecified: true,
                    lastComment: "Доступны все операции Статус карты: Активна, cтатус картсчёта: 51",
                    currCode: 933,
                    currIso: "BYN",
                    accessStatus: 2,
                    cardStatus: 1,
                    cardStatusName: "Активна",
                    cardAccStatus: 51,
                    isOpen: 1,
                    isLocked: 0,
                    corNonCor: 2,
                    corNonCorName: "Некорпоративная",
                    pkgName: "NO_PACK_SWT",
                    cardMaskedNumber: "************3333",
                    cardContractNumber: cardContractNumber,
                    cardRBSNumber: "<string[30]>",
                    dopNonDop: 2,
                    cardBin: 0,
                    cardColor: "#70a0b8",
                    isCardMain: 0,
                    contractNum: "<string[19]>",
                    contractTypeInt: 0,
                    contractTypeName: "",
                    defaultSynonym: "DK3333",
                    customSynonym: "",
                    contractOpenDateSpecified: false,
                    contractCloseDate: "0001-01-01T00:00:00",
                    cContractCloseDateSpecified: false,
                    dealTerm: 0,
                    rate: 0,
                    elContractCloseDateSpecified: false,
                    minAmount: 0,
                    contractRest: 0,
                    description: "",
                    isStCashCard: 0,
                    stCashCardContractId: "",
                    isElDeposit: false,
                    secure3D: 2,
                    secure3DText: "Есть",
                    smsNotify: 6,
                    smsNotifyText: "Только бесплатные SMS",
                    savings: 0,
                    orderValue: 0,
                    iban: "<string[28]>",
                    bic: "PJCBBY2X",
                    contractNumberReplenishment: "",
                    contractNumberRedemption: "",
                },
            },
            {
                clientObject: {
                    id: 1,
                    prodType: 2,
                    subSystemInstanceId: 4,
                    contract_id: "",
                    externalId: "ext1",
                    identifier: "1111",
                    card_type: "3",
                    cardTypeName: "VISA GOLD",
                    type: 6,
                    typeName: "Дебетовая карта",
                    openDate: "2018-01-01T00:00:00+03:00",
                    openDateSpecified: true,
                    closeDateSpecified: false,
                    expDate: "2019-01-01T00:00:00+03:00",
                    expDateSpecified: true,
                    lastComment: "Доступны все операции Статус карты: Активна, cтатус картсчёта: 51",
                    currCode: 933,
                    currIso: "BYN",
                    accessStatus: 2,
                    cardStatus: 1,
                    cardStatusName: "Активна",
                    cardAccStatus: 51,
                    isOpen: 1,
                    isLocked: 0,
                    corNonCor: 2,
                    corNonCorName: "Некорпоративная",
                    pkgName: "PACK_3_SWT",
                    cardMaskedNumber: "************1111",
                    cardContractNumber: cardContractNumber,
                    cardRBSNumber: "<string[30]>",
                    dopNonDop: 2,
                    cardBin: 0,
                    cardColor: "#efd066",
                    isCardMain: 1,
                    contractNum: "<string[19]>",
                    contractTypeInt: 0,
                    contractTypeName: "",
                    defaultSynonym: "DK1111",
                    customSynonym: "",
                    contractOpenDateSpecified: false,
                    contractCloseDate: "0001-01-01T00:00:00",
                    cContractCloseDateSpecified: false,
                    dealTerm: 0,
                    rate: 0,
                    elContractCloseDateSpecified: false,
                    minAmount: 0,
                    contractRest: 0,
                    description: "",
                    isStCashCard: 0,
                    stCashCardContractId: "",
                    isElDeposit: false,
                    secure3D: 2,
                    secure3DText: "Есть",
                    smsNotify: 8,
                    smsNotifyText: "СМС.PRO",
                    savings: 0,
                    orderValue: 0,
                    iban: "<string[28]>",
                    bic: "PJCBBY2X",
                    contractNumberReplenishment: "",
                    contractNumberRedemption: "",
                },
            },
            {
                clientObject: {
                    id: 1,
                    prodType: 2,
                    subSystemInstanceId: 4,
                    contract_id: "",
                    externalId: "ext2",
                    identifier: "2222",
                    card_type: "2",
                    cardTypeName: "VISA CLASSIC",
                    type: 6,
                    typeName: "Дебетовая карта",
                    openDate: "2018-01-01T00:00:00+03:00",
                    openDateSpecified: true,
                    closeDateSpecified: false,
                    expDate: "2019-01-01T00:00:00+03:00",
                    expDateSpecified: true,
                    lastComment: "Доступны все операции Статус карты: Активна, cтатус картсчёта: 51",
                    currCode: 933,
                    currIso: "BYN",
                    accessStatus: 2,
                    cardStatus: 1,
                    cardStatusName: "Активна",
                    cardAccStatus: 51,
                    isOpen: 1,
                    isLocked: 0,
                    corNonCor: 2,
                    corNonCorName: "Некорпоративная",
                    pkgName: "NO_PACK_SWT",
                    cardMaskedNumber: "************2222",
                    cardContractNumber: cardContractNumber,
                    cardRBSNumber: "<string[30]>",
                    dopNonDop: 2,
                    cardBin: 0,
                    cardColor: "#70a0b8",
                    isCardMain: 0,
                    contractNum: "<string[19]>",
                    contractTypeInt: 0,
                    contractTypeName: "",
                    defaultSynonym: "DK2222",
                    customSynonym: "",
                    contractOpenDateSpecified: false,
                    contractCloseDate: "0001-01-01T00:00:00",
                    cContractCloseDateSpecified: false,
                    dealTerm: 0,
                    rate: 0,
                    elContractCloseDateSpecified: false,
                    minAmount: 0,
                    contractRest: 0,
                    description: "",
                    isStCashCard: 0,
                    stCashCardContractId: "",
                    isElDeposit: false,
                    secure3D: 2,
                    secure3DText: "Есть",
                    smsNotify: 6,
                    smsNotifyText: "Только бесплатные SMS",
                    savings: 0,
                    orderValue: 0,
                    iban: "<string[28]>",
                    bic: "PJCBBY2X",
                    contractNumberReplenishment: "",
                    contractNumberRedemption: "",
                },
            },
        ]).map((x) => x.clientObject.defaultSynonym)).toEqual(["DK1111"]);
    });
});

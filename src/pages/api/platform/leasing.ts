import { NextApiRequest, NextApiResponse } from 'next';

const data = {
  question_flow: {
    validationSchema: {
      carbrand: {},
      carmodel: {},
      carmanufac: {},
      hmborrow: {
        validation: {
          rule: 'number',
        },
      },
      debtfree: {},
      hmrepaid: {},
      latepayment: {},
      province: {},
      district: {},
      zipcode: {},
      occupation: {},
      income: {},
      name: {
        validation: {
          rule: 'name',
          min: 0,
          max: 40,
        },
      },
      surname: {
        validation: {
          rule: 'name',
          min: 0,
          max: 40,
        },
      },
      phone: {
        validation: {
          rule: 'phone',
        },
      },
      email: {
        validation: {
          rule: 'email',
        },
      },
      customer_banks: {
        validation: {
          rule: 'array',
        },
      },
      tc: {},
    },
    questions: {
      carbrand: {
        code: 'carbrand',
        order: 1,
        section: 'car',
        label: 'motor:questions.labels.brand',
        validation: {},
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        buttonsPerRow: '3',
        tipText: 'motor:questions.tooltips.brand',
        translations: {
          translatePlaceholders: false,
          label: 'motor:questions.labels.brand',
          placeholder: 'motor:questions.placeholders.brand',
          tooltip: 'motor:questions.tooltips.brand',
        },
        type: 'combo_radio_select',
        choiceTranslation: null,
        singleChoices: [
          {
            value: 'Toyota',
            label: 'Toyota',
            image: {
              srcSet:
                '/images/car-brands/54.png?2 1x, /images/car-brands/54@2x.png?2 2x',
              alt: 'Toyota logo',
            },
          },
          {
            value: 'Honda',
            label: 'Honda',
            image: {
              srcSet:
                '/images/car-brands/24.png?2 1x, /images/car-brands/24@2x.png?2 2x',
              alt: 'Honda logo',
            },
          },
          {
            value: 'Isuzu',
            label: 'Isuzu',
            image: {
              srcSet:
                '/images/car-brands/26.png?2 1x, /images/car-brands/26@2x.png?2 2x',
              alt: 'Isuzu logo',
            },
          },
          {
            value: 'Mazda',
            label: 'Mazda',
            image: {
              srcSet:
                '/images/car-brands/33.png?2 1x, /images/car-brands/33@2x.png?2 2x',
              alt: 'Mazda logo',
            },
          },
          {
            value: 'Nissan',
            label: 'Nissan',
            image: {
              srcSet:
                '/images/car-brands/38.png?2 1x, /images/car-brands/38@2x.png?2 2x',
              alt: 'Nissan logo',
            },
          },
          {
            value: 'Mitsubishi',
            label: 'Mitsubishi',
            image: {
              srcSet:
                '/images/car-brands/35.png?2 1x, /images/car-brands/35@2x.png?2 2x',
              alt: 'Mitsubishi logo',
            },
          },
        ],
        selectOptions: [
          {
            label: 'motor:questions.placeholders.brand',
            isPlaceHolder: true,
          },
          {
            label: 'Alfa Romeo',
            value: 'Alfa Romeo',
          },
          {
            label: 'Aston Martin',
            value: 'Aston Martin',
          },
          {
            label: 'Audi',
            value: 'Audi',
          },
          {
            label: 'BMW',
            value: 'BMW',
          },
          {
            label: 'Bentley',
            value: 'Bentley',
          },
          {
            label: 'Chery',
            value: 'Chery',
          },
          {
            label: 'Chevrolet',
            value: 'Chevrolet',
          },
          {
            label: 'Chrysler',
            value: 'Chrysler',
          },
          {
            label: 'Citroen',
            value: 'Citroen',
          },
          {
            label: 'DFM',
            value: 'DFM',
          },
          {
            label: 'Daewoo',
            value: 'Daewoo',
          },
          {
            label: 'Daihatsu',
            value: 'Daihatsu',
          },
          {
            label: 'Ferrari',
            value: 'Ferrari',
          },
          {
            label: 'Fiat',
            value: 'Fiat',
          },
          {
            label: 'Ford',
            value: 'Ford',
          },
          {
            label: 'Foton',
            value: 'Foton',
          },
          {
            label: 'Holden',
            value: 'Holden',
          },
          {
            label: 'Honda',
            value: 'Honda',
          },
          {
            label: 'Hummer',
            value: 'Hummer',
          },
          {
            label: 'Hyundai',
            value: 'Hyundai',
          },
          {
            label: 'Isuzu',
            value: 'Isuzu',
          },
          {
            label: 'Jaguar',
            value: 'Jaguar',
          },
          {
            label: 'Jeep',
            value: 'Jeep',
          },
          {
            label: 'Kia',
            value: 'Kia',
          },
          {
            label: 'Lamborghini',
            value: 'Lamborghini',
          },
          {
            label: 'Land Rover',
            value: 'Land Rover',
          },
          {
            label: 'Lexus',
            value: 'Lexus',
          },
          {
            label: 'Lotus',
            value: 'Lotus',
          },
          {
            label: 'MG',
            value: 'MG',
          },
          {
            label: 'Maserati',
            value: 'Maserati',
          },
          {
            label: 'Maxus',
            value: 'Maxus',
          },
          {
            label: 'Mazda',
            value: 'Mazda',
          },
          {
            label: 'McLaren',
            value: 'McLaren',
          },
          {
            label: 'Mercedes-Benz',
            value: 'Mercedes-Benz',
          },
          {
            label: 'Mini',
            value: 'Mini',
          },
          {
            label: 'Mitsubishi',
            value: 'Mitsubishi',
          },
          {
            label: 'Mitsuoka',
            value: 'Mitsuoka',
          },
          {
            label: 'Naza',
            value: 'Naza',
          },
          {
            label: 'Nissan',
            value: 'Nissan',
          },
          {
            label: 'Opel',
            value: 'Opel',
          },
          {
            label: 'Peugeot',
            value: 'Peugeot',
          },
          {
            label: 'Polarsun',
            value: 'Polarsun',
          },
          {
            label: 'Porsche',
            value: 'Porsche',
          },
          {
            label: 'Proton',
            value: 'Proton',
          },
          {
            label: 'Renault',
            value: 'Renault',
          },
          {
            label: 'Rolls-Royce',
            value: 'Rolls-Royce',
          },
          {
            label: 'Rover',
            value: 'Rover',
          },
          {
            label: 'Saab',
            value: 'Saab',
          },
          {
            label: 'Seat',
            value: 'Seat',
          },
          {
            label: 'Skoda',
            value: 'Skoda',
          },
          {
            label: 'Smart',
            value: 'Smart',
          },
          {
            label: 'Spyker',
            value: 'Spyker',
          },
          {
            label: 'Ssangyong',
            value: 'Ssangyong',
          },
          {
            label: 'Subaru',
            value: 'Subaru',
          },
          {
            label: 'Suzuki',
            value: 'Suzuki',
          },
          {
            label: 'TR',
            value: 'TR',
          },
          {
            label: 'Tata',
            value: 'Tata',
          },
          {
            label: 'Toyota',
            value: 'Toyota',
          },
          {
            label: 'Volkswagen',
            value: 'Volkswagen',
          },
          {
            label: 'Volvo',
            value: 'Volvo',
          },
        ],
        sortLabels: 'asc',
        placeholder: 'motor:questions.placeholders.brand',
      },
      carmodel: {
        code: 'carmodel',
        order: 2,
        section: 'car',
        label: 'motor:questions.labels.model',
        validation: {},
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        buttonsPerRow: '3',
        tipText: 'motor:questions.tooltips.model',
        translations: {
          translatePlaceholders: false,
          label: 'motor:questions.labels.model',
          placeholder: 'motor:questions.placeholders.model',
          tooltip: 'motor:questions.tooltips.model',
        },
        type: 'combo_radio_select',
        choiceTranslation: null,
        singleChoices: [],
        selectOptions: [],
        sortLabels: 'asc',
        placeholder: 'motor:questions.placeholders.model',
      },
      carmanufac: {
        code: 'carmanufac',
        order: 3,
        section: 'car',
        label: 'motor:questions.labels.year',
        validation: {},
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        buttonsPerRow: '1',
        tipText: 'motor:questions.tooltips.year',
        translations: {
          translatePlaceholders: false,
          label: 'motor:questions.labels.year',
          placeholder: 'motor:questions.placeholders.year',
          tooltip: 'motor:questions.tooltips.year',
        },
        type: 'combo_radio_select',
        choiceTranslation: null,
        singleChoices: [],
        selectOptions: [],
        placeholder: 'motor:questions.placeholders.year',
      },
      hmborrow: {
        order: 4,
        code: 'hmborrow',
        label: 'motor:questions.labels.car_loan_price',
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        section: 'car',
        currency: 'motor:questions.labels.car_loan_price_currency',
        showIcon: true,
        translations: {
          label: 'motor:questions.labels.car_loan_price',
          placeholder: '',
          tooltip: '',
        },
        validation: {
          rule: 'number',
          max: 500000,
        },
        subLabel: 'Current Value of your car :500,000 THB',
        type: 'price',
      },
      debtfree: {
        code: 'debtfree',
        type: 'combo_radio_select',
        section: 'car',
        order: 5,
        label: 'Please select',
        translations: {
          label: 'motor:questions.labels.car_deb_free',
          placeholder: '',
          tooltip: '',
        },
        singleChoices: [
          {
            value: 'Y',
            label: 'motor:questions.labels.car_deb_free_yes',
          },
          { value: 'N', label: 'motor:questions.labels.car_deb_free_no' },
        ],
        buttonsPerRow: '2',
        selectOptions: [],
        choiceTranslation: null,
      },
      hmrepaid: {
        order: 6,
        code: 'hmrepaid',
        section: 'car',
        placeholder: '',
        dynamic: true,
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.debt_repaid',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '1',
        selectOptions: [],
        choiceTranslation: null,
        singleChoices: [
          { value: 'A1', label: 'motor:hmrepaid.label.less_than_40' },
          { value: 'A2', label: 'motor:hmrepaid.label.more_than_40' },
          { value: 'A3', label: 'motor:hmrepaid.label.more_than_70' },
        ],
        skipQuestion: '',
      },
      latepayment: {
        order: 7,
        code: 'latepayment',
        section: 'car',
        placeholder: '',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.late_payment_history',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '1',
        selectOptions: [],
        choiceTranslation: null,
        singleChoices: [
          { value: 'A1', label: 'motor:latepayment.label.no_late_payment' },
          { value: 'A2', label: 'motor:latepayment.label.more_than_30_days' },
          { value: 'A3', label: 'motor:latepayment.label.more_than_60_days' },
          { value: 'A4', label: 'motor:latepayment.label.more_than_90_days' },
        ],
      },
      province: {
        order: 8,
        label: 'Please select',
        code: 'province',
        section: 'car',
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.car_province',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '2',
        selectOptions: [],
        choiceTranslation: null,
        singleChoices: [],
        placeholder: 'motor:questions.placeholders.select_province',
      },
      district: {
        order: 9,
        label: 'Please select',
        code: 'district',
        section: 'car',
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },

        placeholder: 'motor:questions.placeholders.select_district',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.car_district',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '2',
        selectOptions: [],
        choiceTranslation: null,
        singleChoices: [],
      },
      zipcode: {
        order: 10,
        label: 'Please select',
        code: 'zipcode',
        section: 'car',
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        placeholder: 'motor:questions.placeholders.select_zipcode',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.car_zipcode',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '2',
        selectOptions: [],
        choiceTranslation: null,
        singleChoices: [],
      },
      occupation: {
        order: 11,
        code: 'occupation',
        section: 'car',
        placeholder: 'motor:questions.placeholders.select_occupation',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.customer_occupation',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '1',
        singleChoices: [],
        choiceTranslation: null,
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_occupation',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:occupation.label.permanent_officer',
          },
          {
            value: 'A2',
            label: 'motor:occupation.label.business_owner_company',
          },
          {
            value: 'A3',
            label: 'motor:occupation.label.business_owner_no_company',
          },
          {
            value: 'A4',
            label: 'motor:occupation.label.government_officer',
          },
          {
            value: 'A5',
            label: 'motor:occupation.label.military',
          },
          {
            value: 'A6',
            label: 'motor:occupation.label.freelancer',
          },
          {
            value: 'A7',
            label: 'motor:occupation.label.temp_employee',
          },
          {
            value: 'A8',
            label: 'motor:occupation.label.unemployed',
          },
          {
            value: 'A9',
            label: 'motor:occupation.label.doctor',
          },
          {
            value: 'A10',
            label: 'motor:occupation.label.farmer',
          },
          {
            value: 'A11',
            label: 'motor:occupation.label.agricultural_worker',
          },
          {
            value: 'A12',
            label: 'motor:occupation.label.taxi_driver',
          },
          {
            value: 'A13',
            label: 'motor:occupation.label.hawker',
          },
          {
            value: 'A14',
            label: 'motor:occupation.label.small_contractor',
          },
          {
            value: 'A15',
            label: 'motor:occupation.label.recycling_officer',
          },
          {
            value: 'A16',
            label: 'motor:occupation.label.others',
          },
        ],
      },
      income: {
        order: 12,
        label: 'Please select',
        code: 'income',
        section: 'car',
        placeholder: 'motor:questions.placeholders.select_income',
        type: 'combo_radio_select',
        translations: {
          label: 'motor:questions.labels.customer_income',
          placeholder: '',
          tooltip: '',
        },
        buttonsPerRow: '2',
        selectOptions: [
          {
            label: 'motor:questions.placeholders.select_income',
            isPlaceHolder: true,
          },
          {
            value: 'A1',
            label: 'motor:income.label.less_than_15k',
          },
          {
            value: 'A2',
            label: 'motor:income.label.thb_15k_to_20k',
          },
          {
            value: 'A3',
            label: 'motor:income.label.thb_20k_to_30k',
          },
          {
            value: 'A4',
            label: 'motor:income.label.thb_30k_to_50k',
          },
          {
            value: 'A5',
            label: 'motor:income.label.thb_50k_to_100k',
          },
          {
            value: 'A6',
            label: 'motor:income.label.thb_100k_to_150k',
          },
          {
            value: 'A7',
            label: 'motor:income.label.more_than_150k',
          },
        ],
        choiceTranslation: null,
        singleChoices: [],
      },
      name: {
        code: 'name',
        type: 'multi_question',
        section: 'car',
        placeholder: 'motor:questions.labels.first_name',
        questions: [
          {
            order: 13,
            code: 'name',
            label: 'motor:questions.labels.first_name',
            section: 'car',
            translations: {
              label: 'motor:questions.labels.first_name',
              placeholder: '',
              tooltip: '',
            },
            type: 'text',
            validation: {
              rule: 'name',
              min: 0,
              max: 40,
            },
          },
          {
            order: 14,
            code: 'surname',
            label: 'motor:questions.labels.last_name',
            section: 'car',
            translations: {
              label: 'motor:questions.labels.last_name',
              placeholder: '',
              tooltip: '',
            },
            type: 'text',
            validation: {
              rule: 'name',
              min: 0,
              max: 40,
            },
          },
        ],
      },
      phone: {
        code: 'phone',
        section: 'car',
        type: 'multi_question',
        validation: {
          rule: 'phone',
        },
        questions: [
          {
            order: 15,
            code: 'phone',
            label: 'motor:questions.labels.customer_phone',
            section: 'loan',
            translations: {
              label: 'motor:questions.labels.customer_phone',
              placeholder: '',
              tooltip: '',
            },
            type: 'phone',
            validation: {
              rule: 'phone',
            },
          },
          {
            order: 16,
            code: 'email',
            label: 'motor:questions.labels.customer_email',
            section: 'car',
            translations: {
              label: 'motor:questions.labels.customer_email',
              placeholder: '',
              tooltip: '',
            },
            type: 'email',
            validation: {
              rule: 'email',
            },
          },
        ],
      },
      customer_banks: {
        section: 'car',
        code: 'customer_banks',
        type: 'rich_multi_choice',
        label: 'motor:questions.labels.customer_banks.label',
        limitationText: '* Thai Citizenship only',
        description: {
          text: 'motor:questions.labels.customer_banks.description',
          tip: 'motor:questions.labels.customer_banks.tip_text',
        },
        checkbox: {
          label: 'motor:questions.labels.customer_banks.checkbox_label',
          value: '1',
        },
        dynamic: {
          group: 'car',
          dependants: ['car'],
        },
        skipQuestion: [],
        order: 17,
        translations: {
          label: 'motor:questions.labels.customer_income',
          placeholder: '',
          tooltip: '',
        },
        items: [
          {
            id: 'SCB',
            name: 'SCB',
            isRecommended: true,
            logo: '/images/banks/bank_1.svg,',
            isActive: true,
            flatRate: '5.05',
            effective: '10.58',
            maxLoan: '5M',
            maxTerm: 84,
            ncbCheck: true,
          },
          {
            id: 'KKP',
            name: 'Kiatnakin Phatra',
            logo: '/images/banks/bank_2.svg,',
            isRecommended: false,
            isActive: true,
            flatRate: '6.65',
            effective: '11.97',
            maxLoan: '5M',
            maxTerm: 84,
            ncbCheck: true,
          },
          {
            id: 'KBANK',
            name: 'Kasikorn',
            logo: '/images/banks/bank_3.svg,',
            flatRate: '4.05',
            effective: '7.31',
            maxLoan: '5M',
            maxTerm: 72,
            ncbCheck: true,
            isRecommended: false,
            isActive: true,
          },
          {
            id: 'KRUNGSRI',
            name: 'Krungsri',
            logo: '/images/banks/bank_4.svg,',
            isRecommended: false,
            isActive: true,
            flatRate: '3.09',
            effective: '5.57',
            maxLoan: '5M',
            maxTerm: 84,
            ncbCheck: true,
          },
          {
            id: 'TISCO',
            name: 'TISCO',
            logo: '/images/banks/bank_5.svg,',
            isRecommended: false,
            isActive: true,
            flatRate: '5.88',
            effective: '10.58',
            maxLoan: '10M',
            maxTerm: 72,
            ncbCheck: true,
          },
          {
            id: 'ASN',
            name: 'ASN',
            logo: '/images/banks/bank_6.svg,',
            isRecommended: false,
            isActive: true,
            flatRate: '9.48',
            effective: '17.06',
            maxLoan: '300K',
            maxTerm: 84,
            ncbCheck: false,
          },
          {
            id: 'SOMWANG',
            name: 'Somwang',
            logo: '/images/banks/bank_7.svg,',
            isRecommended: false,
            isActive: false,
            flatRate: '5.88',
            effective: '10.58',
            maxLoan: '10M',
            maxTerm: 72,
            ncbCheck: false,
            eligibleText: 'You are not eligible for this bank',
          },
          {
            id: 'TTB',
            name: 'TTB',
            logo: '/images/banks/bank_8.svg,',
            isRecommended: false,
            isActive: false,
            flatRate: '3.6',
            effective: '6.48',
            maxLoan: '300K',
            maxTerm: 72,
            ncbCheck: false,
            eligibleText: 'You are not eligible for this bank',
          },
          {
            id: 'CARFINN',
            name: 'CarFinn',
            logo: '/images/banks/bank_9.svg,',
            isRecommended: false,
            isActive: false,
            flatRate: '3.18',
            effective: '5.93',
            maxLoan: '5M',
            maxTerm: 84,
            ncbCheck: true,
            eligibleText: 'You are not eligible for this bank',
          },
        ],
        subLabel: 'Current Value of your car :500,000 THB',
        validation: {
          rule: 'array',
          min: 1,
        },
      },
      tc: {
        label:
          '<a href="https://rabbitfinance.com/en/privacy-policy" target="_blank" rel="noreferrer noopener"><span style="color:#0000FF;">Your information is secured.</span></a> Please accept <a href="https://rabbitfinance.com/en/terms-and-conditions" target="_blank" rel="noreferrer noopener"><span style="color:#0000FF;">Term and Condition.</span></a>',
        code: 'tc',
        optionY: 'Y',
        optionN: 'N',
      },
    },

    questionOrder: [
      'carbrand',
      'carmodel',
      'carmanufac',
      'hmborrow',
      'debtfree',
      'hmrepaid',
      'latepayment',
      'province',
      'district',
      'zipcode',
      'occupation',
      'income',
      'name',
      'surname',
      'phone',
      'email',
      'customer_banks',
      'tc',
    ],
    sections: {
      car: {
        label: 'motor:page_titles.leasing_comparison',
        code: 'car',
        questions: [
          'carbrand',
          'carmodel',
          'carmanufac',
          'hmborrow',
          'debtfree',
          'hmrepaid',
          'latepayment',
          'province',
          'district',
          'zipcode',
          'occupation',
          'income',
          'name',
          'phone',
          'customer_banks',
        ],
      },
    },
    sectionsVisibility: {
      car: false,
    },
    questionsVisibility: {
      carbrand: true,
      tc: false,
    },
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}

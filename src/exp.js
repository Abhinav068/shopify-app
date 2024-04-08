let data = [
    {
        id: 5410823995521,
        email: 'russel.winfield@example.com',
        created_at: '2024-04-06T02:32:56-04:00',
        updated_at: '2024-04-08T04:27:52-04:00',
        first_name: 'Russell',
        last_name: 'Winfield',
        orders_count: 0,
        state: 'disabled',
        total_spent: '0.00',
        last_order_id: null,
        note: 'This customer is created with most available fields',
        verified_email: true,
        multipass_identifier: null,
        tax_exempt: false,
        tags: 'VIP',
        last_order_name: null,
        currency: 'INR',
        phone: '+16135550135',
        addresses: [[Object]],
        accepts_marketing: false,
        accepts_marketing_updated_at: null,
        marketing_opt_in_level: 'single_opt_in',
        tax_exemptions: [],
        email_marketing_consent: {
            state: 'not_subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: null
        },
        sms_marketing_consent: {
            state: 'not_subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: null,
            consent_collected_from: 'OTHER'
        },
        admin_graphql_api_id: 'gid://shopify/Customer/5410823995521',
        default_address: {
            id: 6764727369857,
            customer_id: 5410823995521,
            first_name: 'Russell',
            last_name: 'Winfield',
            company: 'Company Name',
            address1: '105 Victoria St',
            address2: 'New colony',
            city: 'Toronto',
            province: null,
            country: 'Canada',
            zip: 'M5C1N7',
            phone: null,
            name: 'Russell Winfield',
            province_code: null,
            country_code: 'CA',
            country_name: 'Canada',
            default: true
        }
    },
    {
        id: 5410823962753,
        email: 'ayumu.hirano@example.com',
        created_at: '2024-04-06T02:32:56-04:00',
        updated_at: '2024-04-06T02:32:56-04:00',
        first_name: 'Ayumu',
        last_name: 'Hirano',
        orders_count: 0,
        state: 'disabled',
        total_spent: '0.00',
        last_order_id: null,
        note: null,
        verified_email: true,
        multipass_identifier: null,
        tax_exempt: false,
        tags: '',
        last_order_name: null,
        currency: 'INR',
        phone: '+16135550127',
        addresses: [],
        accepts_marketing: false,
        accepts_marketing_updated_at: null,
        marketing_opt_in_level: 'single_opt_in',
        tax_exemptions: [],
        email_marketing_consent: {
            state: 'not_subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: null
        },
        sms_marketing_consent: {
            state: 'not_subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: null,
            consent_collected_from: 'OTHER'
        },
        admin_graphql_api_id: 'gid://shopify/Customer/5410823962753'
    },
    {
        id: 5410823929985,
        email: 'karine.ruby@example.com',
        created_at: '2024-04-06T02:32:56-04:00',
        updated_at: '2024-04-06T02:32:56-04:00',
        first_name: 'Karine',
        last_name: 'Ruby',
        orders_count: 0,
        state: 'disabled',
        total_spent: '0.00',
        last_order_id: null,
        note: null,
        verified_email: true,
        multipass_identifier: null,
        tax_exempt: false,
        tags: '',
        last_order_name: null,
        currency: 'INR',
        phone: '+16135550142',
        addresses: [],
        accepts_marketing: false,
        accepts_marketing_updated_at: null,
        marketing_opt_in_level: 'single_opt_in',
        tax_exemptions: [],
        email_marketing_consent: {
            state: 'not_subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: null
        },
        sms_marketing_consent: {
            state: 'not_subscribed',
            opt_in_level: 'single_opt_in',
            consent_updated_at: null,
            consent_collected_from: 'OTHER'
        },
        admin_graphql_api_id: 'gid://shopify/Customer/5410823929985'
    }
];
let phone_number='6135550135';
let ans=data.filter(e => {
    console.log(e.phone.slice(e.phone.length - 10, e.length),phone_number);
    return e.phone.slice(e.phone.length - 10, e.length) == phone_number;
    // return true;
});
console.log(ans);
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import APP_CONSTANTS from './Constants';

const ApplyLoan = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.title = "Easy Loan | Apply Loan";
    }, []);
    
    const { register, handleSubmit, formState } = useForm({
        defaultValues : {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            amount: "",
            purpose: "",
            industry: "",
            employer: "",
            building: "",
            street: "",
            city: "",
            pincode: ""
        }
    });

    const { errors, isValid } = formState;

    const onSubmit = () => {
        setIsSuccess(false);
        if(!isValid) {
            return
        }

        setIsSuccess(true);
        setTimeout(() => {
            const element = document.querySelector('.alert-banner');
            element.scrollIntoView({behavior: 'smooth'});    
        }, 500);
    }

    return ( 
        <div className="wrapper">
            <h1 className="page-heading">Apply Loan</h1>
            {isSuccess && <div ref={ref} class="alert alert-banner alert-success">
                <span class="body">{APP_CONSTANTS.MESSAGES.APPLY_LOAN_SUCCESS}</span>
            </div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group-wrapper">
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">*First Name</label>
                        <input id="firstName" type="text" className="form-input" name="firstName"
                            {...register('firstName', {
                                required: {
                                    value: true,
                                    message: "First Name is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.firstName?.message }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">*Last Name</label>
                        <input id="lastName" type="text" className="form-input" name="lastName"
                            {...register('lastName', {
                                required: {
                                    value: true,
                                    message: "Last Name is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.lastName?.message }</span>
                    </div>
                </div>
                <div className="form-group-wrapper">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">*Email address</label>
                        <input id="email" type="email" className="form-input" name="email"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: APP_CONSTANTS.FIELD_ERRORS.EMAIL_REQUIRED
                                },
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: APP_CONSTANTS.FIELD_ERRORS.EMAIL_INVALID
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.email?.message }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">*Phone number</label>
                        <input id="phone" type="text" className="form-input" name="phone" maxLength={10}
                            {...register('phone', {
                                required: {
                                    value: true,
                                    message: "Phone Number is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.phone?.message }</span>
                    </div>
                </div>
                <div className="form-group-wrapper">
                    <div className="form-group">
                        <label htmlFor="amount" className="form-label">*Loan amount</label>
                        <input id="amount" type="text" className="form-input" name="amount"
                            {...register('amount', {
                                required: {
                                    value: true,
                                    message: "Loan Amount is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.amount?.message }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="purpose" className="form-label">*Purpose of loan</label>
                        <select name="purpose" id="purpose" className="form-select" {...register('purpose', {
                                required: {
                                    value: true,
                                    message: "Purpose of loan is required"
                                }
                            })}>
                            <option value="">Select Purpose</option>
                            <option value="hl">Home Loan</option>
                            <option value="cl">Car Loan</option>
                            <option value="bl">Business Loan</option>
                        </select>
                        <span className='field-error'>{ errors.purpose?.message }</span>
                    </div>
                </div>
                <div className="form-group-wrapper">
                    <div className="form-group">
                        <label htmlFor="industry" className="form-label">*Employment Industry</label>
                        <input id="industry" type="text" className="form-input" name="industry"
                            {...register('industry', {
                                required: {
                                    value: true,
                                    message: "Employment Industry is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.industry?.message }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employer" className="form-label">*Employer name</label>
                        <input id="employer" type="text" className="form-input" name="employer" 
                            {...register('employer', {
                                required: {
                                    value: true,
                                    message: "Employer name is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.employer?.message }</span>
                    </div>
                </div>
                <div className="form-group-wrapper">
                    <div className="form-group">
                        <label htmlFor="building" className="form-label">Apartment / Building</label>
                        <input id="building" type="text" className="form-input" name="building"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="street" className="form-label">Street</label>
                        <input id="street" type="text" className="form-input" name="street"/>
                    </div>
                </div>
                <div className="form-group-wrapper">
                    <div className="form-group">
                        <label htmlFor="city" className="form-label">City / Town</label>
                        <input id="city" type="text" className="form-input" name="city"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode" className="form-label">*Pincode</label>
                        <input id="pincode" type="text" className="form-input" name="pincode"
                            {...register('pincode', {
                                required: {
                                    value: true,
                                    message: "Pincode is required"
                                }
                            })}
                        />
                        <span className='field-error'>{ errors.pincode?.message }</span>
                    </div>
                </div>
                <button type="submit" className="btn-submit">Apply Loan</button>
            </form>
        </div>
     );
}
 
export default ApplyLoan;
import React from 'react';
import styles from './Signup.module.css'; 

const Signup = () => {

    return (
        <div className={styles.backContainer}>
            <div className={styles.formContainer}>
                <div className={styles.formLeft}>
                    <h4>Signup</h4>
                    <p className={styles.p1}>Already have account? <a href="/Login">Login here</a></p>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <div className={styles.inputWrapper}>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Enter your name" 
                                />
                            </div>
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email id</label>
                            <div className={styles.inputWrapper}>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter your email" 
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.inputWrapper}>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                     </div>
                    </div>

                    <div className={styles.formGroup}>
                            <div className={styles.checkboxWrapper}>
                                <input 
                                    type="checkbox" 
                                    id="terms" 
                                    name="terms" 
                                />
                                <label htmlFor="terms">By signing up, you agree to receive updates and special Offers.</label>
                            </div>
                        </div>


                        <button type="submit">Submit</button>
                    </form>

                </div>
                

                {/* Right section for image */}
                <div className={styles.formRight}>
                    <img src="/src/assets/sign.up img.avif" alt="Signup" />
                </div>
            </div>
        </div>
    );
};


export default Signup;

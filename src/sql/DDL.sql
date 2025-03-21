CREATE SCHEMA connecting_cyber_networks;
SET SQL_SAFE_UPDATES = 0;


user_details, CREATE TABLE user_details (
  user_id varchar(256) NOT NULL,
  full_name text,
  email varchar(256) NOT NULL,
  phone varchar(15) NOT NULL,
  image_url text,
  isEmailVerified bit(1) DEFAULT NULL,
  isPhoneVerified bit(1) DEFAULT NULL,
  PRIMARY KEY (user_id)
)



aadhar_details, CREATE TABLE aadhar_details (
    aadhar_id varchar(15) NOT NULL,
    aadhaar_name text,
    aadhar_address mediumtext,
    user_id varchar(256) DEFAULT NULL,
    PRIMARY KEY (aadhar_id),
    KEY user_id_idx (user_id),
    CONSTRAINT user_id_reference_to_aadhar_number FOREIGN KEY (user_id) REFERENCES user_details (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);


address_details, CREATE TABLE address_details (
    address_line mediumtext,
    city varchar(64) DEFAULT NULL,
    pincode varchar(12) DEFAULT NULL,
    state varchar(64) DEFAULT NULL,
    country varchar(64) DEFAULT NULL,
    user_id varchar(256) DEFAULT NULL,
    address_id varchar(256) DEFAULT NULL,
    KEY user_id_idx (user_id),
    CONSTRAINT user_id_reference_to_address FOREIGN KEY (user_id) REFERENCES user_details (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE course_details (
    course_id varchar(256) NOT NULL,
    name varchar(256) DEFAULT NULL,
    description mediumtext,
    price int DEFAULT NULL,
    demo_price int DEFAULT NULL,
    thumbnail varchar(256) DEFAULT NULL,
    is_free bit(1) DEFAULT 0,
    course_duration int DEFAULT NULL,
    PRIMARY KEY (course_id)
);


payment_details, CREATE TABLE payment_details (
    payment_id varchar(256) NOT NULL,
    transaction_id varchar(256) DEFAULT NULL,
    order_id varchar(256) DEFAULT NULL,
    is_completed bit(1) DEFAULT NULL,
    payment_mode varchar(45) DEFAULT NULL,
    user_id varchar(256) DEFAULT NULL,
    payment_object longtext,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (payment_id)
)

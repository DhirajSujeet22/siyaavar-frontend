import React from "react";

const ShippingDetails = () => {
  return (
    <>
      <div className="mx-auto bg-[#fffbf2] p-10">
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Shipping and Delivery Policy
        </h1>

        <p className="mb-4">
          We, at Vedant Fashions Limited (“VFL”) make all commercial and
          reasonable endeavours to ensure that Products are delivered to the
          Users in a timely fashion. Users are required to peruse and understand
          the terms contained in this Delivery Policy. If you do not agree then
          you are advised not to accept the Terms of Use and the Shipping and
          Delivery Policy and may abstain from using the Platforms. The terms
          contained in this Shipping and Delivery Policy shall be accepted
          without modification and accordingly, you agree to be bound by the
          terms contained herein
        </p>

        <ul style={{ listStyleType: "lower-alpha" }} className="ml-6 my-8">
          <li className="my-3">
            All products are shipped within 48 hours of placing the order. All
            products are shipped from the warehouse located in Kolkata (India)
            to respective shipping address(s) provided by the
            user/customer/purchaser. As we endeavour to deliver our products
            across India, we partner with third party courier services providers
            viz. Delhivery/ FedEx / Blue Dart/ DTDC/ DHL. (“Courier Partners”)
            to effectuate delivery. Details of delivery partners will be
            provided to the users upon the purchased product being handed over
            to the delivery partner by VFL.
          </li>
          <li className="my-3">
            A standard date of delivery shall be provided to the Users in the
            order confirmation email. Users are to provide complete street
            address along with their pin code details at the time of placing the
            purchase order.
          </li>
          <li className="my-3">
            Our orders are processed on weekdays i.e., from Monday to Saturday,
            excluding national or declared holidays.
          </li>
          <li className="my-3">
            In case you book multiple products and services in one transaction,
            efforts will be made to ship all products together. However, this
            may not always be possible. Furthermore, we process to only one
            shipping address per order, therefore, in case, any customer places
            an order of several items to be shipped to different address(es),
            each address shall be treated as a separate order.
          </li>
          <li className="my-3">
            We do not ship to Post Office Box address(es) and do not take any
            responsibility for non-delivery of orders in case an order is
            delivered to P. O. Box and not received by the customer.
          </li>
          <li className="my-3">
            Orders once confirmed cannot be edited/ modified/ or changed.
            However, We accept such requests for address change, made within six
            hours of placing the order or prior to shipping of the order,
            whichever is earlier. For related concerns and queries, you may
            reach us at care@vedantfashions.com.
          </li>
          <li className="my-3">
            Keeping in view the ease of delivery, our courier partners will make
            three (3) delivery attempts at the address specified by the user or
            customer at the time of placing the order, and thereafter if the
            order/ package remains undelivered, our courier partners will
            intimate us regarding the said non-delivery.
          </li>
          <li className="my-3">
            We aim to keep stock of all products listed on our website. In case
            you have made payment for a product that is unavailable or would
            take longer to deliver then, we will make proactive attempts to
            communicate the User about the delay, within 2 working days, on
            his/her registered mobile number or email address.
          </li>
          <li className="my-3">
            Upon order confirmation, we provide the User a tracking number for
            the order via Email and SMS. Your orders can be conveniently tracked
            through the Online Tracking Facility on our website under “Track
            Order” in My Account section. In case of any delivery related
            concerns or disputes or if the package status is visible as
            non-deliverable, you are requested to contact our courier partners’
            customer service numbers or reach out to them on the below mentioned
            websites-
          </li>
        </ul>

        <ul className="list-disc ml-6 mb-4">
          <li>Blue Dart Express- https://www.bluedart.com/</li>
          <li>Delhivery- https://www.delhivery.com/</li>
          <li>Fedex- https://www.fedex.com</li>
          <li>India Post- https://www.indiapost.gov.in</li>
        </ul>

        <p className="mb-4">
          Or such other courier service as may be applicable from time to time.
          You can also mail us at care@vedantfashions.com with your order
          details in case of further queries or concerns.
        </p>

        <h2 className="text-xl font-semibold mt-4">International Shipping</h2>
        <p className="mb-4">
          VFL ships to any street address worldwide. We ship orders via our
          international delivery partners like DHL or FEDEX. All products are
          dispatched from our warehouse located in Kolkata, India and are
          dispatched in minimum possible time. Shipping and Delivery timings may
          vary depending upon the working hours of the concerned country and
          policies of our courier partners.
        </p>

        <p className="mb-4">
          ANY CUSTOMS DUTIES OR TAXES THAT ARE ASSESSED BY THE RELEVANT
          AUTHORITY WILL BE BOURNE BY US (VFL) ON OUR CUSTOMERS' BEHALF.
        </p>

        <p className="mb-4">
          We strive to provide you a comfortable and speedy delivery of
          products. The product prices include custom/ import duties or taxes
          and the same may vary depending upon the country. To grant a seamless
          delivery to our customers and enrich their shopping experience with
          VFL, we have instructed our Courier partners to clear the goods/
          products from Customs authority of respective countries, by paying the
          applicable duties/taxes, on behalf of our customers and to be bourne
          by us.
        </p>

        <p className="mb-4">
          For further queries, please contact our support team at{" "}
          <a
            href="mailto:care@vedantfashions.com"
            className="text-blue-600 underline"
          >
            care@vedantfashions.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default ShippingDetails;

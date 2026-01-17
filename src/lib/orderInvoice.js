export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>🧾 Order Invoice</h2>
      <p>Order ID: <strong>#${orderId}</strong></p>

      <table width="100%" border="1" cellspacing="0" cellpadding="8">
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="center">Qty</th>
            <th align="right">Price</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
              <tr>
                <td>${item.title}</td>
                <td align="center">${item.quantity}</td>
                <td align="right">৳${item.price}</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>

      <h3 style="text-align:right; margin-top: 10px;">
        Total: ৳${totalPrice.toFixed(2)}
      </h3>

      <p>We will contact you soon for delivery.</p>

      <p style="margin-top: 20px;">
        <strong>HeroKids Team</strong>
      </p>
    </div>
  `;
};

import "server-only";
import { NextResponse } from "next/server";

import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import { redirect } from "next/navigation";

export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
    const metadata = paymentData.metadata;
    const userEmail = metadata.user_email; // Os metadados do Mercado Pago são convertidos para snake_case
    const testeId = metadata.teste_id; // Os metadados do Mercado Pago são convertidos para snake_case

    // Faz alguma ação aqui - manda email pro usuario, libera acesso, erc.

    return

}

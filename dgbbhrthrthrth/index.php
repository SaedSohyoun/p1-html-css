<?php

class Bankrekening {
    private $saldo;

    public function __construct($initieelSaldo = 0) {
        $this->saldo = $initieelSaldo;
    }

    public function getSaldo() {
        return $this->saldo;
    }

    public function storten($bedrag) {
        if ($bedrag > 0) {
            $this->saldo += $bedrag;
            return "Storting van $bedrag euro was succesvol. Nieuw saldo: " . $this->saldo . " euro";
        } else {
            return "Ongeldig bedrag voor storting.";
        }
    }

    public function opnemen($bedrag) {
        if ($bedrag > 0 && $this->saldo >= $bedrag) {
            $this->saldo -= $bedrag;
            return "Opname van $bedrag euro was succesvol. Nieuw saldo: " . $this->saldo . " euro";
        } else {
            return "Ongeldig bedrag voor opname of ontoereikend saldo.";
        }
    }
}

// Voorbeeldgebruik:
$bankrekening = new Bankrekening(1000); // Een nieuwe bankrekening met een saldo van 1000 euro

echo "Huidig saldo: " . $bankrekening->getSaldo() . " euro<br>";
echo $bankrekening->storten(500) . "<br>"; // Storting van 500 euro
echo $bankrekening->opnemen(200) . "<br>"; // Opname van 200 euro
echo $bankrekening->opnemen(1500) . "<br>"; // Ongeldige opname

?>
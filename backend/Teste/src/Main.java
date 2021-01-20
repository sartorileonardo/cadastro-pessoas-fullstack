import javax.swing.*;

public class Main {

    public static void main(String[] args) throws Exception {

        Integer numberOne = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro numero: "));
        Integer numberSecond = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo numero: "));

        System.out.println("A soma de ambos os numeros eh: "+ soma(numberOne, numberSecond));
        System.out.println("A subtracao de ambos os numeros eh: "+ subtracao(numberOne, numberSecond));
        System.out.println("A multiplicacao de ambos os numeros eh: "+ multiplicacao(numberOne, numberSecond));
        System.out.println("A divisao de ambos os numeros eh: "+ dividao(numberOne, numberSecond));

        System.out.println("O resto da divisao eh: "+ mod(numberOne, numberSecond));

        System.out.println("O maior numero eh: "+ maior(numberOne, numberSecond));
        System.out.println("O menor numero eh: "+ menor(numberOne, numberSecond));

    }

    private static Integer soma(Integer num1, Integer num2){
        return num1 + num2;
    }

    private static Integer subtracao(Integer num1, Integer num2){
        return num1 - num2;
    }

    private static Integer multiplicacao(Integer num1, Integer num2){
        return num1 * num2;
    }

    private static Integer dividao(Integer num1, Integer num2) throws Exception {
        if(num1 == 0 || num2 == 0){
            throw new Exception("Nao eh possível realizar a divisao por zero, digite um numero diferente de zero na proxima tentativa.");
        }
        return num1 / num2;
    }

    private static Integer mod(Integer num1, Integer num2){
        return num1 % num2;
    }

    private static Integer maior(Integer num1, Integer num2){
        return Math.max(num1, num2);
    }

    private static Integer menor(Integer num1, Integer num2){
        return Math.min(num1, num2);
    }
}

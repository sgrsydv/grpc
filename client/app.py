import grpc
import calculator_pb2
import calculator_pb2_grpc

if __name__ == '__main__':
    channel = grpc.insecure_channel('127.0.0.1:50051')
    stub = calculator_pb2_grpc.CalculatorStub(channel)

    first = int(input('First number:'))
    second = int(input('Second number:'))

    numbers = calculator_pb2.Numbers(a=first, b=second)

    add_response = stub.add(numbers)
    multiply_response = stub.multiply(numbers)

    print("Multiply Result:", multiply_response.value)
    print("Add Result:", add_response.value)

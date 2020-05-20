#include <Servo.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BNO055.h>
#include <utility/imumaths.h>
#define STEP_VALUE 10
boolean DIRECTION = false;
int iter = 0;
Servo servo7,servo8;
int tangazh, kren;
int inChar = 10, temp_inChar;
int readyTang, readyKren;

/* Set the delay between fresh samples */
uint16_t BNO055_SAMPLERATE_DELAY_MS = 100;

// Check I2C device address and correct line below (by default address is 0x29 or 0x28)
//                                   id, address
Adafruit_BNO055 bno = Adafruit_BNO055(55, 0x29);

void setup() {
  servo7.attach(7); // Горизонталь 10 -> 70
  
  servo8.attach(8); //Вертикаль 10 -> 120
  
//  Serial.begin(9600);
  
  pinMode(6, INPUT);
  pinMode(5, INPUT);
  servo8.write(50);

  Serial.begin(115200);
  Serial.println("Orientation Sensor Test"); Serial.println("");

  /* Initialise the sensor */
  if (!bno.begin())
  {
    /* There was a problem detecting the BNO055 ... check your connections */
    Serial.print("Ooops, no BNO055 detected ... Check your wiring or I2C ADDR!");
    while (1);
  }

  delay(1000);
}

void loop() {
  sensors_event_t orientationData;
  bno.getEvent(&orientationData, Adafruit_BNO055::VECTOR_EULER);

  tangazh =  orientationData.orientation.z;
  kren =  orientationData.orientation.y;

readyTang = 40+tangazh;//55
readyKren = 90-tangazh+kren;//+40
Serial.print("tangazh: ");
Serial.print(tangazh);

Serial.print(" kren: ");
Serial.print(kren);

Serial.print(" readyTang: ");
Serial.print(readyTang);

Serial.print(" readyKren: ");
Serial.println(readyKren);

//if(readyTang < 10) readyTang = 10;
if(readyTang > 110) readyTang = 110;

//if(readyKren < 0) readyKren = 0;
//if(readyKren > 70) readyKren = 70;
  servo8.write(readyTang);
  delay(10);
  servo7.write(readyKren); 
  delay(10);
  
}

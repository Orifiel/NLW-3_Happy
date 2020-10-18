import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602818382999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: "id", //identificação unica
            type: "integer", //esse valor é do tipo inteiro
            unsigned: true, // essa coluna sempre será positivo
            isPrimary: true, // indica que a coluna é a chave primaria
            isGenerated: true, // coluna gerada automaticamente
            generationStrategy: "increment", // usa a logica de incremento automatico

          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text"
          },
          {
            name: "opening_hours",
            type: "varchar",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          }

        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orphanages')
    }

}

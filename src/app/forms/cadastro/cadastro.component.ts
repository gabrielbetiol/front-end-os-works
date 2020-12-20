import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  isValidInput(fieldName: any): boolean {
    return this.cadastroForm.controls[fieldName].invalid &&
      (this.cadastroForm.controls[fieldName].dirty || this.cadastroForm.controls[fieldName].touched)
  }

  resetForm() {
    this.cadastroForm.reset();
  }

  insertUser() {
    if (this.cadastroForm.valid) {
      this.clienteService.insert(this.cadastroForm.value).subscribe();
      this.cadastroForm.reset();
      alert("Usuario inserido com sucesso!");
    }
    this.cadastroForm.reset();
  }

}

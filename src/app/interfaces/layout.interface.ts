export interface MENU_LIST_INTERFACE {
    title: string;
    key: string;
    isActive: boolean;
  }

export interface HOLIDAY_TYPE {
    day: string;
    date: string;
    occasion: string;
    leave_type: string;
  }

  export interface Employee {
    name: string;
    loanAmount: number;
    interestRate: number;
    emi: number;
    loanDeductions: LoanDeduction[];
    salaryByMonth: { [month: string]: number };
  }

  export interface LoanDeduction {
    month: string;
    deductionAmount: number;
  }
  